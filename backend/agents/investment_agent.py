def calculate_sip(user):
    disposable_income = user.income - user.expenses

    if disposable_income <= 0:
        return 0

    # Risk-based allocation
    if user.risk_profile == "high":
        invest_ratio = 0.6
    elif user.risk_profile == "medium":
        invest_ratio = 0.4
    else:
        invest_ratio = 0.2

    sip = disposable_income * invest_ratio
    return sip