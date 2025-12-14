#!/bin/bash

# Test form submission with curl
curl -X POST http://localhost:3001/api/submit-form \
  -H "Content-Type: application/json" \
  -d '{
    "industry": "Plumbing Services",
    "businessIdea": "Emergency plumbing services for residential areas",
    "email": "test@example.com",
    "businessName": "Test Plumbing Company",
    "website": "https://testplumbing.com",
    "country": "Australia"
  }'