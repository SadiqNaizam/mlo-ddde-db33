import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, CalendarDays, DollarSign, FileText, ArrowRight } from 'lucide-react';

const AdmissionsPage = () => {
    console.log('Admissions Page loaded');

    const applicationSteps = [
        {
            title: "Submit Online Application",
            description: "Complete the comprehensive online form with your personal, academic, and research background.",
            icon: <FileText className="h-6 w-6 text-primary" />
        },
        {
            title: "Upload Required Documents",
            description: "Provide transcripts, letters of recommendation, a statement of purpose, and your CV.",
            icon: <CheckCircle className="h-6 w-6 text-primary" />
        },
        {
            title: "Application Review",
            description: "Our admissions committee and faculty conduct a holistic review of your profile.",
            icon: <FileText className="h-6 w-6 text-primary" />
        },
        {
            title: "Decision Notification",
            description: "Receive your admission decision and potential offer details via our secure portal.",
            icon: <CalendarDays className="h-6 w-6 text-primary" />
        }
    ];

    return (
        <div className="bg-background text-foreground">
            <Header />

            <main className="pt-20">
                {/* Hero Section */}
                <section className="container mx-auto text-center py-20 lg:py-28">
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                        Admissions & Aid
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground font-body">
                        Join a community of innovators and pioneers. We seek the brightest minds to challenge the conventional and shape the future of technology.
                    </p>
                </section>

                {/* Stipend & Funding Section */}
                <section className="container mx-auto pb-20">
                    <Card className="bg-primary/5 border-primary shadow-lg">
                        <CardHeader className="flex flex-col md:flex-row items-start gap-4">
                            <div className="bg-primary/10 p-4 rounded-md">
                                <DollarSign className="h-10 w-10 text-primary" />
                            </div>
                            <div>
                                <CardTitle className="font-heading text-2xl md:text-3xl text-primary">
                                    A Fully-Funded Doctoral Experience
                                </CardTitle>
                                <CardDescription className="mt-2 text-foreground/80 font-body">
                                    Our commitment to research excellence includes a comprehensive financial support package for all admitted PhD students.
                                </CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6 font-body text-foreground/90">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold">Generous Annual Stipend</h4>
                                    <p className="text-sm text-muted-foreground">Focus on your research without financial burden, with a stipend that exceeds industry standards.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold">Full Tuition & Fee Waiver</h4>
                                    <p className="text-sm text-muted-foreground">Your academic costs are completely covered, allowing you to immerse yourself in your studies.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold">Comprehensive Health Insurance</h4>
                                    <p className="text-sm text-muted-foreground">We provide premium health, dental, and vision coverage for all our doctoral candidates.</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>
                
                {/* Application Process & Criteria Section */}
                <section className="bg-secondary/40 py-20">
                    <div className="container mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold">How to Apply</h2>
                            <p className="mt-3 max-w-2xl mx-auto text-muted-foreground font-body">A clear path to beginning your journey at Aethelred.</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                            {/* Left side: Criteria and Deadlines */}
                            <div className="space-y-8">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="font-heading text-2xl">Admission Criteria</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3 font-body">
                                        <p className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-primary/80 mt-0.5 flex-shrink-0" /><span>Bachelor's degree in a related field.</span></p>
                                        <p className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-primary/80 mt-0.5 flex-shrink-0" /><span>Official academic transcripts.</span></p>
                                        <p className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-primary/80 mt-0.5 flex-shrink-0" /><span>Three letters of recommendation.</span></p>
                                        <p className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-primary/80 mt-0.5 flex-shrink-0" /><span>A compelling Statement of Purpose.</span></p>
                                        <p className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-primary/80 mt-0.5 flex-shrink-0" /><span>Proof of English proficiency (if applicable).</span></p>
                                    </CardContent>
                                </Card>
                                 <Card>
                                    <CardHeader>
                                        <CardTitle className="font-heading text-2xl">Key Dates & Deadlines</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3 font-body">
                                         <p className="flex items-start gap-2"><CalendarDays className="h-5 w-5 text-primary/80 mt-0.5 flex-shrink-0" /><span><strong>Application Opens:</strong> September 1, 2024</span></p>
                                         <p className="flex items-start gap-2"><CalendarDays className="h-5 w-5 text-primary/80 mt-0.5 flex-shrink-0" /><span><strong>Application Deadline:</strong> December 15, 2024</span></p>
                                         <p className="flex items-start gap-2"><CalendarDays className="h-5 w-5 text-primary/80 mt-0.5 flex-shrink-0" /><span><strong>Decision Notification:</strong> By February 15, 2025</span></p>
                                    </CardContent>
                                </Card>
                            </div>

                             {/* Right side: FAQ Accordion */}
                            <div>
                                <h3 className="font-heading text-2xl font-bold mb-4">Frequently Asked Questions</h3>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className="font-body font-semibold text-left">Are GRE scores required for admission?</AccordionTrigger>
                                        <AccordionContent className="font-body text-muted-foreground">
                                            The GRE is not required for admission to any of our PhD programs. We conduct a holistic review of all application materials to assess a candidate's potential.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger className="font-body font-semibold text-left">Is prior research experience mandatory?</AccordionTrigger>
                                        <AccordionContent className="font-body text-muted-foreground">
                                            While prior research experience is highly beneficial and common among successful applicants, it is not a strict requirement. We value demonstrated passion and potential for research in your field of interest.
                                        </AccordionContent>
                                    </AccordionItem>
                                     <AccordionItem value="item-3">
                                        <AccordionTrigger className="font-body font-semibold text-left">What support is available for international students?</AccordionTrigger>
                                        <AccordionContent className="font-body text-muted-foreground">
                                            Aethelred provides comprehensive support for international students, including visa processing assistance, dedicated advising, and community integration programs. All admitted students receive the same financial package regardless of citizenship.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action Section */}
                <section className="container mx-auto text-center py-20">
                     <h2 className="font-heading text-3xl md:text-4xl font-bold">
                        Ready to Begin Your Legacy?
                    </h2>
                     <p className="mt-3 max-w-2xl mx-auto text-muted-foreground font-body">
                        Your journey to the forefront of innovation starts here.
                    </p>
                    <div className="mt-8">
                        <Button size="lg" asChild>
                            <a href="https://application.aethelred.edu" target="_blank" rel="noopener noreferrer">
                                Start Your Application
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default AdmissionsPage;