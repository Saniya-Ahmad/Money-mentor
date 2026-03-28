def calculate_health_score(user, result):

    score = 0

    # 🔹 Savings Score (30)
    savings_rate = user.savings / user.income if user.income > 0 else 0

    if savings_rate >= 0.3:
        savings_score = 30
    elif savings_rate >= 0.2:
        savings_score = 20
    else:
        savings_score = 10

    score += savings_score

    # 🔹 Expense Score (20)
    expense_ratio = user.expenses / user.income if user.income > 0 else 0

    if expense_ratio < 0.5:
        expense_score = 20
    elif expense_ratio < 0.7:
        expense_score = 15
    else:
        expense_score = 5

    score += expense_score

    # 🔹 Investment Score (30)
    sip_ratio = result['sip'] / user.income if user.income > 0 else 0

    if sip_ratio >= 0.2:
        investment_score = 30
    elif sip_ratio >= 0.1:
        investment_score = 20
    else:
        investment_score = 10

    score += investment_score

    # 🔹 Risk Score (20)
    if expense_ratio > 0.7:
        risk_score = 5
    elif savings_rate < 0.2:
        risk_score = 10
    else:
        risk_score = 20

    score += risk_score

    return {
        "total_score": score,
        "breakdown": {
            "savings": savings_score,
            "expenses": expense_score,
            "investment": investment_score,
            "risk": risk_score
        }
    }