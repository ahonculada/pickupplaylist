from fastapi import FastAPI
from typing import List, Optional
#import crud
#import models
#import schemas
#from database import SessionLocal, engine

#models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Dependency
#def get_db():
#    db = SessionLocal()
#    try:
#        yield db
#    finally:
#        db.close()


@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}

#@app.post("/users/", response_model=schemas.User)
#def create_user(user: schemas.UserCreate, db: Session= Depends(get_db)):
#    db_user = crud.get_user_by_email(db, email=user.email)
#    if db_user:
#        raise HTTPException(status_code=400, detail="Email already registered")
#    return crud.create_user(db=db, user=user)

#@app.get("/users/", response_model=List[schemas.User])
#def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
#    users = crud.get_users(db, skip=skip, limit=limit)
#    return users

@app.post("/signin")
def sign_in_user(email: str, password: str):
    return email

@app.post("/signup")
def sign_up_user(email: str, password: str):
    return email

@app.post("/create")
def create_tag(vid_type: str, vid_URL: str):
    return vid_URL

#URL = 'https://www.youtube.com/watch?v=NrO0CJCbYLA'
#vid_id = URL.split("=")[1]
