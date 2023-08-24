# syntax=docker/dockerfile:1

FROM python:3.11-slim-buster

WORKDIR /pythonproject

COPY . .
RUN pip install -r requirements.txt


CMD ["python3", "main.py", "--host=0.0.0.0", "--port=5000"]