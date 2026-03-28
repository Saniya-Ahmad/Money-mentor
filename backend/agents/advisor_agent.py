def generate_advice(user, result):

    advice = []

    savings_rate = user.savings / user.income if user.income > 0 else 0
    expense_ratio = user.expenses / user.income if user.income > 0 else 0

    # 🔹 Explanation (SMART)
    if savings_rate >= 0.3:
        advice.append(
            f"You are managing your finances very well with a strong savings rate of {round(savings_rate*100,1)}%. "
            f"A {result['strategy']} will help you grow your wealth further."
        )
    elif savings_rate >= 0.2:
        advice.append(
            f"You have a moderate savings rate of {round(savings_rate*100,1)}%. "
            f"A {result['strategy']} can help improve your financial growth."
        )
    else:
        advice.append(
            f"Your savings rate is currently low at {round(savings_rate*100,1)}%. "
            f"A {result['strategy']} is recommended to improve your financial stability."
        )

    # 🔹 Recommendations (ADAPTIVE)
    advice.append("\nRecommendations:")

    if savings_rate < 0.2:
        advice.append("- Focus on increasing your savings aggressively.")

    if expense_ratio > 0.6:
        reduction = int(user.expenses - user.income * 0.5)
        advice.append(f"- Reduce expenses by around ₹{reduction} to improve savings.")

    target_sip = int(user.income * 0.2)

    if result['sip'] < target_sip:
        advice.append(f"- Increase SIP from ₹{result['sip']} to ₹{target_sip} for better returns.")
    else:
        advice.append("- Your current SIP level is good. Maintain consistency.")

    if savings_rate >= 0.3:
        advice.append("- Consider diversifying investments into higher-return options.")

    advice.append(f"- Maintain an emergency fund of ₹{result['emergency_fund']}.")

    # 🔹 Insight (SMART)
    if savings_rate >= 0.3:
        insight = "excellent and above average"
    elif savings_rate >= 0.2:
        insight = "average but can be improved"
    else:
        insight = "below recommended levels"

    advice.append(
        f"\nKey Insight: Your savings rate is {round(savings_rate*100,1)}%, which is {insight}."
    )

    # 🔹 Risk (EXPLAINED)
    if expense_ratio > 0.7:
        risk = "HIGH"
        reason = "expenses are too high compared to income"
    elif savings_rate < 0.2:
        risk = "MEDIUM"
        reason = "low savings may affect long-term goals"
    else:
        risk = "LOW"
        reason = "your financial balance is stable"

    advice.append(f"\nRisk Level: {risk} ({reason}).")

    return "\n".join(advice)