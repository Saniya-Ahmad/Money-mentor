def calculate_goal_investment(goal):
    monthly_rate = 0.10 / 12  # 10% return
    months = goal.years * 12

    future_value = goal.target_amount

    sip = future_value * monthly_rate / ((1 + monthly_rate)**months - 1)
    return sip