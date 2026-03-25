from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from models.user_model import UserInput
from agents.planner_agent import plan_strategy
from agents.investment_agent import calculate_sip
from agents.tax_agent import estimate_tax_savings
from agents.risk_agent import emergency_fund
from agents.impact_agent import calculate_impact
from services.financial_calculations import calculate_goal_investment
from agents.planner_agent import generate_explanation

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.post("/analyze")
def analyze(user: UserInput):
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