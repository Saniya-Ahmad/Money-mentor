def calculate_impact(user, sip, tax_saved):
    yearly_investment = sip * 12

    savings_rate_before = user.savings / user.income
    savings_rate_after = (user.savings + sip) / user.income

    return {
        "yearly_investment": yearly_investment,
        "tax_saved": tax_saved,
        "savings_rate_before": round(savings_rate_before, 2),
        "savings_rate_after": round(savings_rate_after, 2)
    }