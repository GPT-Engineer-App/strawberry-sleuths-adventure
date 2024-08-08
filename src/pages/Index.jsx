import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Strawberry } from 'lucide-react';

const strawberryTypes = [
  { name: "Sweet Seer", description: "Predicts positive events" },
  { name: "Tart Tracker", description: "Uncovers hidden truths" },
  { name: "Berry Bloodhound", description: "Sniffs out mysteries" },
  { name: "Juicy Judge", description: "Weighs important decisions" },
  { name: "Seed Sleuth", description: "Reveals small but crucial details" },
];

const predictions = [
  "You'll have an unexpectedly delightful conversation today!",
  "An opportunity for adventure will present itself. Seize it!",
  "You'll solve a tricky problem with a creative approach.",
  "A friend will reach out with exciting news.",
  "You'll discover a new hobby or interest today.",
  "An act of kindness will brighten your day significantly.",
  "You'll make progress on a long-term goal.",
  "A small but meaningful coincidence will occur today.",
  "You'll learn something fascinating about someone close to you.",
  "A moment of clarity will help you make an important decision.",
];

const Index = () => {
  const [selectedBerry, setSelectedBerry] = useState(null);
  const [prediction, setPrediction] = useState("");

  const selectBerry = (berry) => {
    setSelectedBerry(berry);
    setPrediction("");
  };

  const getPrediction = () => {
    const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
    setPrediction(randomPrediction);
  };

  return (
    <div className="min-h-screen bg-pink-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-red-600">Strawberry Sleuth: Predict the Day!</h1>
        <p className="text-xl text-center mb-8 text-red-400">Choose your berry detective and uncover today's fortune!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {strawberryTypes.map((berry) => (
            <Card key={berry.name} className={`cursor-pointer transition-all ${selectedBerry === berry ? 'ring-2 ring-red-400' : ''}`} onClick={() => selectBerry(berry)}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Strawberry className="mr-2 h-6 w-6 text-red-500" />
                  {berry.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{berry.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedBerry && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Your Chosen Detective: {selectedBerry.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Ready to uncover today's mystery?</p>
            </CardContent>
            <CardFooter>
              <Button onClick={getPrediction} className="w-full bg-red-500 hover:bg-red-600">Reveal Today's Prediction</Button>
            </CardFooter>
          </Card>
        )}

        {prediction && (
          <Card className="bg-red-100">
            <CardHeader>
              <CardTitle className="text-center">Your Strawberry Forecast</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold text-center">{prediction}</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Index;
