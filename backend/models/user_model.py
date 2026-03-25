from pydantic import BaseModel
from typing import List

class Goal(BaseModel):
    name: str
    target_amount: float
    years: int

class UserInput(BaseModel):
    age: int
    income: float
    expenses: float
    savings: float
    investments: float
    goals: List[Goal]
    risk_profile: str  # low / medium / high