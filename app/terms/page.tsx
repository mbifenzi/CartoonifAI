import Link from "next/link"
import Image from "next/image"

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/favicon.png" alt="CartoonifAI Logo" width={32} height={32} className="w-8 h-8" />
              <span className="text-xl font-bold">
                <span className="text-purple-800 dark:text-purple-300">Cartoonif</span>
                <span className="text-orange-500">AI</span>
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="/#styles" className="text-sm font-medium hover:text-primary">
              Styles
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-sm text-gray-500 mb-6">Last Updated: May 22, 2025</p>

            <p>
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the CartoonifAI
              mobile application (the "Service") operated by CartoonifAI Inc. ("us", "we", or "our").
            </p>

            <p>
              Your access to and use of the Service is conditioned on your acceptance of and compliance with these
              Terms. These Terms apply to all visitors, users, and others who access or use the Service.
            </p>

            <p>
              By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of
              the terms, then you may not access the Service.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">1. Use of the Service</h2>

            <h3 className="text-lg font-semibold mt-6 mb-2">1.1 Eligibility</h3>
            <p>
              You must be at least 13 years old to use the Service. By using the Service, you represent and warrant that
              you are at least 13 years of age. If you are under 18 years old, you represent that you have your parent
              or guardian's permission to use the Service and that they have read and agree to these Terms on your
              behalf.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">1.2 User Account</h3>
            <p>
              When you create an account with us, you must provide information that is accurate, complete, and current
              at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate
              termination of your account on our Service.
            </p>

            <p>
              You are responsible for safeguarding the password that you use to access the Service and for any
              activities or actions under your password, whether your password is with our Service or a third-party
              service.
            </p>

            <p>
              You agree not to disclose your password to any third party. You must notify us immediately upon becoming
              aware of any breach of security or unauthorized use of your account.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">1.3 Acceptable Use</h3>
            <p>You agree not to use the Service:</p>
            <ul className="list-disc pl-6 my-4">
              <li>In any way that violates any applicable national or international law or regulation.</li>
              <li>
                To transmit, or procure the sending of, any advertising or promotional material, including any "junk
                mail", "chain letter," "spam," or any other similar solicitation.
              </li>
              <li>
                To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other
                person or entity.
              </li>
              <li>
                To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or
                which, as determined by us, may harm the Company or users of the Service or expose them to liability.
              </li>
              <li>
                To upload, transmit, or distribute any content that is illegal, harmful, threatening, abusive,
                harassing, tortious, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or
                racially, ethnically, or otherwise objectionable.
              </li>
            </ul>

            <h2 className="text-xl font-bold mt-8 mb-4">2. Intellectual Property</h2>

            <h3 className="text-lg font-semibold mt-6 mb-2">2.1 Service Content</h3>
            <p>
              The Service and its original content (excluding Content provided by users), features, and functionality
              are and will remain the exclusive property of CartoonifAI Inc. and its licensors. The Service is protected
              by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks
              and trade dress may not be used in connection with any product or service without the prior written
              consent of CartoonifAI Inc.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">2.2 User Content</h3>
            <p>
              When you upload content through the Service ("User Content"), you grant us a worldwide, non-exclusive,
              royalty-free license to use, reproduce, modify, adapt, publish, translate, create derivative works from,
              distribute, and display such content in connection with providing the Service.
            </p>

            <p>
              You represent and warrant that: (i) you own the content or have the right to use it and grant us the
              rights and license as provided in these Terms, and (ii) the posting of your content on or through the
              Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other
              rights of any person.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">2.3 Cartoon Transformations</h3>
            <p>
              The cartoon transformations created through our Service are for personal use only. You may share these
              transformations on social media for personal purposes, but you may not use them for commercial purposes.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">3. Advertising</h2>

            <p>
              The Service is provided free of charge in exchange for viewing advertisements. By using the Service, you
              agree to view advertisements that will be displayed within the app. These advertisements help us maintain
              and improve the Service.
            </p>

            <p>
              We may use third-party advertising companies to serve ads when you use the Service. These companies may
              use information about your visits to this and other websites in order to provide advertisements about
              goods and services of interest to you.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">4. Privacy</h2>

            <p>
              Your privacy is important to us. Please review our{" "}
              <Link
                href="/privacy"
                className="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
              >
                Privacy Policy
              </Link>
              , which explains how we collect, use, and disclose information about you in connection with your use of
              the Service.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">5. Termination</h2>

            <p>
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason
              whatsoever, including without limitation if you breach the Terms.
            </p>

            <p>
              Upon termination, your right to use the Service will immediately cease. If you wish to terminate your
              account, you may simply discontinue using the Service or delete your account through the app settings.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">6. Limitation of Liability</h2>

            <p>
              In no event shall CartoonifAI Inc., nor its directors, employees, partners, agents, suppliers, or
              affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including
              without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i)
              your access to or use of or inability to access or use the Service; (ii) any conduct or content of any
              third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use
              or alteration of your transmissions or content, whether based on warranty, contract, tort (including
              negligence) or any other legal theory, whether or not we have been informed of the possibility of such
              damage.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">7. Disclaimer</h2>

            <p>
              Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE"
              basis. The Service is provided without warranties of any kind, whether express or implied, including, but
              not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement
              or course of performance.
            </p>

            <p>
              CartoonifAI Inc., its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will
              function uninterrupted, secure or available at any particular time or location; b) any errors or defects
              will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of
              using the Service will meet your requirements.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">8. Governing Law</h2>

            <p>
              These Terms shall be governed and construed in accordance with the laws of the United States, without
              regard to its conflict of law provisions.
            </p>

            <p>
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
              rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining
              provisions of these Terms will remain in effect.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">9. Changes to Terms</h2>

            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision
              is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What
              constitutes a material change will be determined at our sole discretion.
            </p>

            <p>
              By continuing to access or use our Service after those revisions become effective, you agree to be bound
              by the revised terms. If you do not agree to the new terms, please stop using the Service.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">10. Contact Us</h2>

            <p>
              If you have any questions about these Terms, please{" "}
              <Link
                href="/contact"
                className="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
              >
                contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t bg-background">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
                <Image src="/favicon.png" alt="CartoonifAI Logo" width={20} height={20} className="w-5 h-5" />
                <span className="text-sm font-bold">
                  <span className="text-purple-800 dark:text-purple-300">Cartoonif</span>
                  <span className="text-orange-500">AI</span>
                </span>
              </Link>
            </div>
            <div className="flex gap-6 text-sm">
              <Link
                href="/about"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                Contact
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                Privacy
              </Link>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <p>© {new Date().getFullYear()} CartoonifAI. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
