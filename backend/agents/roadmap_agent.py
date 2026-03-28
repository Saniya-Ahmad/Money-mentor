def generate_roadmap(user, result):

    roadmap = []

    monthly_saving = user.income - user.expenses
    emergency_target = result['emergency_fund']

    # 🔹 Emergency Fund Calculation
    months_needed = int(emergency_target / monthly_saving) if monthly_saving > 0 else 0

    # Month-by-month emergency fund
    for i in range(1, min(months_needed, 6) + 1):
        roadmap.append({
            "month": f"Month {i}",
            "action": f"Save ₹{monthly_saving} towards emergency fund"
        })

    if months_needed > 0:
        roadmap.append({
            "month": f"Month {months_needed}",
            "action": f"Emergency fund of ₹{emergency_target} completed"
        })

    # 🔹 Investment Phase
    start_month = months_needed + 1 if months_needed > 0 else 1

    for i in range(start_month, start_month + 6):
        roadmap.append({
            "month": f"Month {i}",
            "action": f"Invest ₹{result['sip']} in SIP"
        })

    # 🔹 Growth Phase
    roadmap.append({
        "month": "Year 2",
        "action": f"Increase SIP to ₹{int(result['sip'] * 1.5)}"
    })

    roadmap.append({
        "month": "Year 3+",
        "action": "Focus on wealth growth and diversification"
    })

    return roadmap