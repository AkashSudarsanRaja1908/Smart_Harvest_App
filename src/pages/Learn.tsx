
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EducationCard from "@/components/EducationCard";
import { mockEducationContent } from "@/data/mockData";
import { GraduationCap, CheckCircle, XCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const Learn = () => {
  const [quizDialogOpen, setQuizDialogOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizComplete, setQuizComplete] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  
  const categories = Array.from(
    new Set(mockEducationContent.map((content) => content.category))
  );
  
  const quizQuestions = [
    {
      question: "What is the primary purpose of tax-loss harvesting?",
      options: [
        "To increase investment returns",
        "To reduce your tax bill by offsetting capital gains",
        "To diversify your portfolio",
        "To maximize dividend income"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the wash-sale rule?",
      options: [
        "A rule requiring you to wash your hands before trading",
        "A rule limiting how much you can invest in one day",
        "A rule preventing tax deductions if you buy substantially identical securities within 30 days",
        "A rule about cleaning up your investment portfolio"
      ],
      correctAnswer: 2
    },
    {
      question: "How long must you hold an investment to qualify for long-term capital gains treatment?",
      options: [
        "30 days",
        "6 months",
        "More than one year",
        "2 years"
      ],
      correctAnswer: 2
    }
  ];
  
  const handleStartQuiz = () => {
    setQuizDialogOpen(true);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setQuizComplete(false);
    setCorrectAnswers(0);
  };
  
  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };
  
  const handleNextQuestion = () => {
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setCorrectAnswers(prev => prev + 1);
    }
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
    } else {
      setQuizComplete(true);
    }
  };
  
  const handleQuizComplete = () => {
    setQuizDialogOpen(false);
    
    if (correctAnswers >= 2) {
      toast.success("Congratulations!", {
        description: "You've earned your Tax Harvesting Certificate!",
        duration: 5000,
      });
    } else {
      toast.info("Keep Learning", {
        description: "Review our resources and try the quiz again!",
        duration: 5000,
      });
    }
  };

  return (
    <div className="container px-4 py-6 lg:px-8 lg:py-8 max-w-7xl">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-dark mb-1">
            Learning Center
          </h1>
          <p className="text-gray-neutral">
            Educational resources to help you understand tax harvesting.
          </p>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex overflow-x-auto pb-2">
          <TabsList className="h-auto">
            <TabsTrigger value="all">All Topics</TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {mockEducationContent.map((content) => (
              <EducationCard key={content.id} content={content} />
            ))}
          </div>
        </TabsContent>

        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {mockEducationContent
                .filter((content) => content.category === category)
                .map((content) => (
                  <EducationCard key={content.id} content={content} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-12 bg-purple-light rounded-lg p-8 text-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-purple flex items-center justify-center mb-4">
          <GraduationCap className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-dark mb-2">
          Take the Tax Harvest Quiz
        </h2>
        <p className="text-gray-neutral max-w-2xl mx-auto mb-6">
          Test your knowledge about tax harvesting strategies and see how much you've learned.
          Complete the quiz to earn a certificate!
        </p>
        <Button className="bg-purple hover:bg-purple-dark" onClick={handleStartQuiz}>
          Start Quiz
        </Button>
      </div>
      
      <Dialog open={quizDialogOpen} onOpenChange={setQuizDialogOpen}>
        <DialogContent className="sm:max-w-md">
          {!quizComplete ? (
            <>
              <DialogHeader>
                <DialogTitle>Tax Harvesting Quiz</DialogTitle>
                <DialogDescription>
                  Question {currentQuestion + 1} of {quizQuestions.length}
                </DialogDescription>
              </DialogHeader>
              
              <div className="py-4">
                <h3 className="text-lg font-medium mb-4">{quizQuestions[currentQuestion].question}</h3>
                <div className="space-y-3">
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <div 
                      key={index}
                      className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                        selectedAnswer === index 
                          ? 'border-purple bg-purple-light' 
                          : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                      onClick={() => handleAnswerSelect(index)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </div>
              
              <DialogFooter>
                <Button 
                  onClick={handleNextQuestion}
                  disabled={selectedAnswer === null}
                  className="bg-purple hover:bg-purple-dark"
                >
                  {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'Complete Quiz'}
                </Button>
              </DialogFooter>
            </>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle>Quiz Results</DialogTitle>
              </DialogHeader>
              
              <div className="py-6 text-center">
                <div className="mb-4">
                  {correctAnswers >= 2 ? (
                    <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-2" />
                  ) : (
                    <XCircle className="mx-auto h-12 w-12 text-red mb-2" />
                  )}
                </div>
                
                <h3 className="text-xl font-bold mb-2">
                  You got {correctAnswers} out of {quizQuestions.length} correct!
                </h3>
                
                {correctAnswers >= 2 ? (
                  <p className="text-gray-neutral mb-6">
                    Congratulations! You've earned your Tax Harvesting Certificate.
                  </p>
                ) : (
                  <p className="text-gray-neutral mb-6">
                    Keep learning! Review our resources and try again.
                  </p>
                )}
              </div>
              
              <DialogFooter>
                <Button onClick={handleQuizComplete} className="bg-purple hover:bg-purple-dark">
                  {correctAnswers >= 2 ? 'Claim Certificate' : 'Continue Learning'}
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Learn;
