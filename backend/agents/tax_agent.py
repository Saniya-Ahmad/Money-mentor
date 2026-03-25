def estimate_tax_savings(user):
    deduction = min(user.investments, 150000)
    tax_saved = deduction * 0.2
    return tax_saved