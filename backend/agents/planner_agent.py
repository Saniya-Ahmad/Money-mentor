def plan_strategy(user):
    if user.age < 30:
        return "Aggressive growth strategy"
    elif user.age < 50:
        return "Balanced strategy"
    else:
        return "Conservative strategy"

def generate_explanation(user, sip, strategy):
    explanation = f"You are {user.age} years old with a monthly income of ₹{user.income}. "

    explanation += f"Based on your profile, a '{strategy}' is recommended. "

    if sip > 0:
        explanation += f"You can invest approximately ₹{int(sip)} per month after managing your expenses. "
    else:
        explanation += "Your expenses are too high compared to income, so investment is currently not possible. "

    if user.expenses > user.income * 0.7:
        explanation += "Your expenses are quite high, consider reducing them to improve savings. "

    explanation += "Building an emergency fund and investing consistently will help you achieve your financial goals."

    return explanation