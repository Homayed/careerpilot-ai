from fastapi import FastAPI


app = FastAPI(
    title="CareerPilot AI API",
    description="Backend API for CareerPilot AI",
    version="0.1.0",
)

@app.get("/health")
async def health_check():
    return {"status": "ok"}