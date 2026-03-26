from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from auth.auth import hash_password, verify_password, create_access_token

router = APIRouter()

# TEMP DB (resets on restart)
fake_users_db = {}

class UserAuth(BaseModel):
    email: str
    password: str

@router.post("/signup")
def signup(user: UserAuth):
    if user.email in fake_users_db:
        raise HTTPException(status_code=400, detail="User already exists")

    try:
        hashed = hash_password(user.password)
        fake_users_db[user.email] = hashed
    except Exception as e:
        print("HASH ERROR:", e)
        raise HTTPException(status_code=500, detail="Password hashing failed")

    return {"message": "User created successfully"}

@router.post("/login")
def login(user: UserAuth):
    stored_password = fake_users_db.get(user.email)

    if not stored_password:
        raise HTTPException(status_code=401, detail="User not found")

    if not verify_password(user.password, stored_password):
        raise HTTPException(status_code=401, detail="Wrong password")

    token = create_access_token({"sub": user.email})

    return {"access_token": token}