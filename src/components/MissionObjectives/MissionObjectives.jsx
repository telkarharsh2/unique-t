import React from 'react';
import { Smartphone, Download, Star, ShieldCheck, Zap } from 'lucide-react';
import appMockup from '../../assets/images/onboarding.png';

const MissionObjectives = () => {
    return (
        <section id="mission" className="py-5 position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
            {/* Background Decorations */}
            <div className="position-absolute top-0 start-0 w-100 h-100 opacity-50" style={{ pointerEvents: 'none' }}>
                <div className="position-absolute top-0 end-0 bg-warning opacity-10 rounded-circle blur-3xl" style={{ width: '600px', height: '600px', transform: 'translate(30%, -30%)' }}></div>
                <div className="position-absolute bottom-0 start-0 bg-dark opacity-5 rounded-circle blur-3xl" style={{ width: '500px', height: '500px', transform: 'translate(-30%, 30%)' }}></div>
            </div>

            <div className="container py-lg-5 position-relative z-1">
                <div className="row align-items-center g-5">

                    {/* Left Content */}
                    <div className="col-lg-6" data-aos="fade-right">
                        <div className="pe-lg-5">
                            <span className="badge bg-warning text-dark px-3 py-2 rounded-pill mb-4 fw-bold shadow-sm">
                                <span className="d-flex align-items-center gap-2">
                                    <Smartphone size={16} />
                                    Mobile Exclusive
                                </span>
                            </span>

                            <h2 className="display-4 fw-bold font-heading mb-4 lh-tight">
                                Shop Smarter with the <span className="text-grad-maroon-gold" style={{ background: 'linear-gradient(45deg, var(--color-maroon), var(--color-gold))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Unique T Fabric</span> App
                            </h2>

                            <p className="lead text-secondary mb-5">
                                Experience the future of fabric shopping. exclusive collections, real-time tracking, and personalized recommendations right at your fingertips.
                            </p>

                            <div className="row g-4 mb-5">
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-start gap-3">
                                        <div className="p-3 rounded-4 bg-white shadow-sm text-maroon">
                                            <Zap size={24} />
                                        </div>
                                        <div>
                                            <h5 className="fw-bold mb-1">Fast Checkout</h5>
                                            <p className="text-muted small mb-0">Secure 1-click payments</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-start gap-3">
                                        <div className="p-3 rounded-4 bg-white shadow-sm text-maroon">
                                            <Star size={24} />
                                        </div>
                                        <div>
                                            <h5 className="fw-bold mb-1">App Rewards</h5>
                                            <p className="text-muted small mb-0">Earn points on every order</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex flex-wrap gap-3">
                                <a href="#" className="btn btn-dark d-flex align-items-center gap-3 px-4 py-3 rounded-4 shadow hover-scale transition-all">
                                    <div className="d-flex align-items-center justify-content-center bg-white rounded-circle p-1 text-dark" style={{ width: '32px', height: '32px' }}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/732/732208.png" alt="Play Store" className="w-100 h-100 object-fit-contain" />
                                    </div>
                                    <div className="text-start lh-1">
                                        <small className="d-block text-white-50 mb-1" style={{ fontSize: '0.7em' }}>GET IT ON</small>
                                        <span className="fw-bold fs-6">Google Play</span>
                                    </div>
                                </a>

                                <a href="#" className="btn btn-outline-dark d-flex align-items-center gap-3 px-4 py-3 rounded-4 shadow-sm hover-scale transition-all bg-white">
                                    <div className="d-flex align-items-center justify-content-center text-dark" style={{ width: '32px', height: '32px' }}>
                                        <Download size={28} />
                                    </div>
                                    <div className="text-start lh-1">
                                        <small className="d-block text-secondary mb-1" style={{ fontSize: '0.7em' }}>Direct Download</small>
                                        <span className="fw-bold fs-6">My APK</span>
                                    </div>
                                </a>
                            </div>

                            <div className="mt-4 d-flex align-items-center gap-2 text-muted small">
                                <ShieldCheck size={16} />
                                <span>Verified Secure • 50k+ Downloads</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Image/Mockup */}
                    <div className="col-lg-6 mt-5 mt-lg-0" data-aos="fade-left">
                        <div className="position-relative d-flex justify-content-center justify-content-lg-end">
                            <div className="position-absolute top-50 start-50 translate-middle bg-white opacity-50 rounded-circle blur-xl" style={{ width: '400px', height: '400px', zIndex: 0 }}></div>

                            {/* Glassmorphic Card behind phone */}
                            <div className="position-absolute top-50 start-50 translate-middle w-75 h-75 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-5 shadow-lg backdrop-blur-md" style={{ transform: 'rotate(-5deg) scale(0.9)', zIndex: 1 }}></div>

                            <img src={appMockup} alt="Mobile App Interface" className="img-fluid position-relative z-2 drop-shadow-2xl" style={{ maxHeight: '600px', transform: 'rotate(5deg) translateY(-20px)' }} />

                            {/* Floating Stats Card */}
                            <div className="position-absolute bottom-0 start-0 mb-5 ms-md-4 p-3 bg-white rounded-4 shadow-lg z-3 d-none d-md-block animate-float">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="bg-success bg-opacity-10 p-2 rounded-circle text-success">
                                        <Star size={20} fill="currentColor" />
                                    </div>
                                    <div>
                                        <p className="mb-0 fw-bold clr-dark">4.9/5 Rating</p>
                                        <small className="text-muted">From 2k+ reviews</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};


export default MissionObjectives;
