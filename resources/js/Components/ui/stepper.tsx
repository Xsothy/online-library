import React, { createContext, useContext, useState, useRef, useEffect } from 'react'
import { cn } from "@/lib/utils"
import { Button } from "@/Components/ui/button"

interface StepperContextType {
    currentStep: number
    setCurrentStep: (step: number) => void
    nextStep: () => void
    previousStep: () => void
    isLastStep: boolean
    steps: number
    orientation: 'vertical' | 'horizontal'
    errors: Record<string, string>
}

const StepperContext = createContext<StepperContextType | undefined>(undefined)

export const useStepper = () => {
    const context = useContext(StepperContext)
    if (!context) {
        throw new Error('useStepper must be used within a Stepper component')
    }
    return context
}

interface StepperProps {
    children: React.ReactNode
    className?: string
    onComplete?: () => void
    orientation?: 'vertical' | 'horizontal'
    errors?: Record<string, string>
}

export function Stepper({ children, className, onComplete, orientation = 'vertical', errors = {} }: StepperProps) {
    const [currentStep, setCurrentStep] = useState(1)
    const stepperRef = useRef<HTMLDivElement>(null)

    const steps = React.Children.toArray(children).filter(
        (child) => React.isValidElement(child) && !child.props.disabled
    )

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            const stepWithError = steps.findIndex((step) =>
                React.isValidElement(step) &&
                step.props.fields?.some((field: string) => errors[field])
            )
            if (stepWithError !== -1) {
                setCurrentStep((steps[stepWithError] as React.ReactElement).props.name)
            }
        }
    }, [errors])

    const nextStep = () => {
        const nextStepIndex = steps.findIndex((step) => React.isValidElement(step) && step.props.name > currentStep)
        if (nextStepIndex !== -1) {
            setCurrentStep((steps[nextStepIndex] as React.ReactElement).props.name)
        } else if (onComplete) {
            onComplete()
        }
    }

    const previousStep = () => {
        const prevStepIndex = steps.findIndex((step) => React.isValidElement(step) && step.props.name < currentStep)
        if (prevStepIndex !== -1) {
            setCurrentStep((steps[prevStepIndex] as React.ReactElement).props.name)
        }
    }

    return (
        <StepperContext.Provider
            value={{
                currentStep,
                setCurrentStep,
                nextStep,
                previousStep,
                isLastStep: currentStep === (steps[steps.length - 1] as React.ReactElement).props.name,
                steps: steps.length,
                orientation,
                errors
            }}
        >
            <div ref={stepperRef} className={cn(
                "space-y-4",
                orientation === 'horizontal' && "flex flex-col",
                className
            )}>
                <div className={cn(
                    orientation === 'horizontal' && "flex justify-between mb-8",
                    orientation === 'vertical' && "hidden"
                )}>
                    {steps}
                </div>
                {orientation === 'vertical' && steps.map((step, index) => (
                    React.isValidElement(step) && (
                        <div key={index}>
                            {step}
                        </div>
                    )
                ))}
                {orientation === 'horizontal' && steps.map((step, index) => (
                    React.isValidElement(step) && step.props.name === currentStep && (
                        <div key={index} className="mt-4">
                            {step.props.children}
                        </div>
                    )
                ))}
                <StepperNavigation />
            </div>
        </StepperContext.Provider>
    )
}

interface StepProps {
    name: number
    title: string
    caption?: string
    icon?: React.ReactNode
    disabled?: boolean
    children: React.ReactNode
    fields?: string[]
}

export function Step({ name, title, caption, icon, disabled = false, children, fields }: StepProps) {
    const { currentStep, orientation, errors } = useStepper()
    const isActive = currentStep === name
    const isDone = currentStep > name
    const hasError = fields?.some(field => errors[field])

    if (disabled) {
        return null
    }

    if (orientation === 'vertical') {
        return (
            <div className={cn(
                "border-l-2 pl-4 pb-4",
                isActive ? "border-primary" : "border-muted",
                !isActive && !isDone && "opacity-50"
            )}>
                <div className="flex items-center mb-2">
                    <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mr-2",
                        isActive || isDone ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
                        hasError && "bg-destructive text-destructive-foreground"
                    )}>
                        {icon || name}
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">{title}</h3>
                        {caption && <p className="text-sm text-muted-foreground">{caption}</p>}
                    </div>
                </div>
                {isActive && (
                    <div className="mt-2">
                        {children}
                    </div>
                )}
            </div>
        )
    }

    return (
        <div className={cn(
            "flex flex-col items-center text-center flex-1",
            !isActive && !isDone && "opacity-50"
        )}>
            <div className="flex flex-col items-center mb-2">
                <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mb-2",
                    isActive || isDone ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
                    hasError && "bg-destructive text-destructive-foreground"
                )}>
                    {icon || name}
                </div>
                <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    {caption && <p className="text-sm text-muted-foreground">{caption}</p>}
                </div>
            </div>
            <div className={cn(
                "h-0.5 w-full bg-muted mt-2",
                isActive && "bg-primary",
                hasError && "bg-destructive"
            )} />
        </div>
    )
}

function StepperNavigation() {
    const { currentStep, nextStep, previousStep, isLastStep } = useStepper()

    return (
        <div className="flex justify-between mt-4">
            <Button variant="outline" onClick={previousStep} disabled={currentStep === 1}>
                Back
            </Button>
            <Button onClick={nextStep}>
                {isLastStep ? 'Finish' : 'Continue'}
            </Button>
        </div>
    )
}
