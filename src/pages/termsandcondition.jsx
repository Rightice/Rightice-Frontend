import "react";
import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

const termsandcondition = () => {
  return (
    <section>
      <div className="bg-black/10 lg:mt-10 lg:ml-10 mt-5 ml-5 rounded-full flex justify-center items-center h-10 w-10">
        <Link to="/register">
          <IoChevronBack className="text-2xl" />
        </Link>
      </div>
      <div className="lg:px-48 lg:py-10 px-5 py-5 text-[#242D4E]">
        <h1 className="text-3xl font-semibold">
          Lawyer Terms & Conditions Agreement{" "}
        </h1>
        <ul className="flex flex-col gap-5 mt-10 text-justify">
          <li>
            <p className="font-semibold">1. Purpose </p>
            Rightice.ng is a legal consulting platform that connects lawyers
            with clients seeking affordable legal support. By signing up, you
            agree to provide honest, professional, and timely legal
            consultations via the platform.{" "}
          </li>
          <li>
            <p className="font-semibold">2. Eligibility and Registration.</p>
            You must be a licensed lawyer in Nigeria and in good standing with
            the Nigerian Bar Association (NBA). You agree to upload valid
            credentials for verification before your profile goes live.
            Rightice.ng reserves the right to verify or reject registration if
            any document or claim is found to be false or misleading.{" "}
          </li>
          <li>
            <p className="font-semibold">3. Scope of Services</p>
            You agree to provide legal consultations through video, phone, chat,
            or any other medium approved by Rightice.ng. Each consultation
            session is scheduled for a minimum of One hour at the fixed platform
            rate of ₦20,000 (Twenty Thousand Naira).{" "}
          </li>
          <li>
            <p className="font-semibold">4. Payment and Commission Structure</p>
            Rightice.ng charges a 25% commission per consultation to cover
            platform costs, client acquisition, tech maintenance, and admin
            support. You will receive ₦15,000 per consultation. Payouts will be
            made weekly (every Friday) to your designated account, provided your
            earnings are up to ₦15,000. You are responsible for your own taxes
            and statutory obligations.{" "}
          </li>
          <li>
            <p className="font-semibold">5. Cancellation & Refund Policy.</p>
            Clients may cancel bookings within 12 hours for a full refund. If
            you cancel an appointment without valid reason, the client will
            receive a full refund, and the platform reserves the right to review
            your profile. No-shows or repeated late consultations may lead to
            account suspension or delisting.{" "}
          </li>
          <li>
            <p className="font-semibold">6. Professional Conduct</p>
            You agree to provide honest, ethical, and professional legal
            guidance at all times. You must not:
            <li>
              ~ Offer services outside the platform for clients discovered
              through Rightice.ng.
            </li>{" "}
            <li>~ Mislead clients or provide false legal advice. </li>
            <li>~ Use vulgar, discriminatory, or unprofessional language. </li>
          </li>
          <li>
            <p className="font-semibold">7. Confidentiality</p>
            You must treat all client information as confidential and comply
            with all legal confidentiality obligations. Rightice.ng is not
            liable for any breach of confidentiality committed by you.{" "}
          </li>
          <li>
            <p className="font-semibold">8. Platform Integrity</p>
            You may not misuse the platform, interfere with other users, or
            attempt to manipulate ratings/reviews. Violating these terms may
            result in temporary or permanent suspension.{" "}
          </li>
          <li>
            <p className="font-semibold"> 9. Intellectual Property</p>
            All tools, branding, and features of Rightice.ng remain the property
            of the platform. You may not reproduce or use platform materials for
            personal gain outside of Rightice.ng without written permission.{" "}
          </li>
          <li>
            <p className="font-semibold">10. Termination </p>
            You may deactivate your account with 7 days written notice.
            Rightice.ng may suspend or terminate your account if you violate any
            terms herein.{" "}
          </li>
          <li>
            <p className="font-semibold">11. Governing Law</p>
            This agreement is governed by the laws of the Federal Republic of
            Nigeria. Disputes arising will be resolved via arbitration or a
            competent Nigerian court.
          </li>
          <p>
            Acceptance By registering and checking the{" "}
            <b>&quot;I Accept&quot;</b> box during sign up, you affirm that you
            have read, understood, and agreed to these terms.
          </p>
        </ul>
      </div>
    </section>
  );
};

export default termsandcondition;
