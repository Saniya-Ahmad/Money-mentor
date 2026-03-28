from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
import openai
from typing import Optional
from pydantic import BaseModel

from models.user_model import UserInput
from agents.planner_agent import plan_strategy
from agents.investment_agent import calculate_sip
from agents.tax_agent import estimate_tax_savings
from agents.risk_agent import emergency_fund
from agents.impact_agent import calculate_impact
from services.financial_calculations import calculate_goal_investment
from agents.planner_agent import generate_explanation

from auth.security import get_current_user
from fastapi import Depends
from auth.auth_routes import router as auth_router

class ChatRequest(BaseModel):
    message: str
    user_data: Optional[dict] = None

app = FastAPI()
app.include_router(auth_router, prefix="/auth")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize OpenAI client (optional - will fallback to mock responses if not configured)
openai_client = None
if os.getenv("OPENAI_API_KEY"):
    openai_client = openai.OpenAI(api_key=os.getenv("OPENAI_API_KEY"))



@app.post("/analyze")
def analyze(user: UserInput, current_user=Depends(get_current_user)):
    strategy = plan_strategy(user)
    sip = calculate_sip(user)
    tax_saved = estimate_tax_savings(user)
    emergency = emergency_fund(user)
    explanation = generate_explanation(user, sip, strategy)

    goal_sips = []
    for goal in user.goals:
        goal_sips.append({
            "goal": goal.name,
            "required_sip": calculate_goal_investment(goal)
    })

    impact = calculate_impact(user, sip, tax_saved)

    return {
        "strategy": strategy,
        "sip": sip,
        "tax_saved": tax_saved,
        "emergency_fund": emergency,
        "goal_plan": goal_sips,
        "impact": impact,
        "explanation": explanation
    }


@app.post("/chat")
def chat_with_ai(request: ChatRequest, current_user=Depends(get_current_user)):
    """AI-powered financial assistant that answers user questions intelligently"""

    user_message = request.message
    user_data = request.user_data or {}

    # System prompt for financial AI assistant
    system_prompt = """
    You are Money Mentor AI, a sophisticated financial assistant. You help users with:
    - Investment planning and strategy
    - Tax optimization and savings
    - Risk management
    - Retirement planning
    - Budgeting and expense management
    - Financial goal setting
    - Market analysis and trends

    Always provide accurate, helpful, and personalized financial advice.
    Be conversational but professional.
    If you don't have specific user data, give general advice.
    Always recommend consulting financial professionals for complex decisions.
    """

    # Add user context if available
    if user_data:
        context = f"""
        User Financial Context:
        - Monthly Income: ₹{user_data.get('income', 'Not provided')}
        - Monthly Expenses: ₹{user_data.get('expenses', 'Not provided')}
        - Current Savings: ₹{user_data.get('savings', 'Not provided')}
        - Risk Profile: {user_data.get('risk_profile', 'Not provided')}
        - Age: {user_data.get('age', 'Not provided')}
        """
        system_prompt += context

    try:
        if openai_client:
            # Use OpenAI API for intelligent responses
            response = openai_client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": user_message}
                ],
                max_tokens=500,
                temperature=0.7
            )
            ai_response = response.choices[0].message.content.strip()
        else:
            # Fallback to rule-based responses when API key not configured
            ai_response = generate_financial_response(user_message, user_data)

    except Exception as e:
        # Fallback on any error
        ai_response = generate_financial_response(user_message, user_data)

    return {"response": ai_response}


def generate_financial_response(message: str, user_data: dict) -> str:
    """Fallback function for generating financial responses when AI API is not available"""

    message_lower = message.lower()

    # Investment related questions
    if any(word in message_lower for word in ['invest', 'investment', 'sip', 'mutual fund']):
        if user_data.get('risk_profile') == 'high':
            return "Based on your high-risk profile, I recommend considering equity-oriented mutual funds. A SIP of ₹5,000-10,000 monthly could help you build wealth over time. Remember, all investments carry risk."
        elif user_data.get('risk_profile') == 'medium':
            return "For your moderate risk profile, a balanced advantage fund or hybrid mutual fund would be suitable. Consider starting with a monthly SIP of ₹3,000-8,000."
        else:
            return "With your conservative risk profile, I suggest debt funds or balanced funds. A monthly SIP of ₹2,000-5,000 would be appropriate for steady growth."

    # Tax related questions
    elif any(word in message_lower for word in ['tax', 'deduction', '80c', 'saving']):
        return "For tax optimization, maximize your Section 80C deductions (up to ₹1.5 lakh) through ELSS, PPF, or life insurance. Consider HRA exemption if applicable. Your estimated tax savings could be ₹50,000-1,50,000 annually."

    # Savings related questions
    elif any(word in message_lower for word in ['save', 'saving', 'budget', 'expense']):
        income = user_data.get('income', 0)
        expenses = user_data.get('expenses', 0)
        if income > 0:
            savings_rate = ((income - expenses) / income) * 100
            if savings_rate < 20:
                return f"Your current savings rate is {savings_rate:.1f}%. Aim for 20-30% of your income. Try the 50/30/20 rule: 50% needs, 30% wants, 20% savings/investments."
            else:
                return f"Great! Your savings rate of {savings_rate:.1f}% is excellent. Continue maintaining this discipline."
        return "Aim to save 20-30% of your monthly income. Track your expenses and identify areas to cut back on non-essential spending."

    # Retirement questions
    elif any(word in message_lower for word in ['retire', 'retirement', 'pension']):
        age = user_data.get('age', 30)
        years_to_retirement = 60 - age
        if years_to_retirement > 0:
            return f"At age {age}, you have about {years_to_retirement} years until retirement. Consider starting retirement planning now. A monthly SIP could grow significantly with compound interest."
        return "For retirement planning, focus on consistent investing, tax-advantaged schemes, and maintaining an emergency fund covering 6-12 months of expenses."

    # Emergency fund questions
    elif any(word in message_lower for word in ['emergency', 'fund', 'contingency']):
        expenses = user_data.get('expenses', 30000)
        recommended_fund = expenses * 6  # 6 months of expenses
        return f"An emergency fund should cover 6 months of your expenses (₹{recommended_fund.toLocaleString('en-IN')} for you). Keep it in liquid, low-risk instruments like savings accounts or liquid funds."

    # General financial advice
    else:
        return "I'm here to help with your financial planning! I can assist with investment strategies, tax planning, budgeting, retirement planning, and risk management. What specific financial topic would you like to discuss?"