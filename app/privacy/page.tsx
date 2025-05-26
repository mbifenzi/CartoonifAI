import Link from "next/link"
import Image from "next/image"

export default function PrivacyPage() {
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
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-sm text-gray-500 mb-6">Last Updated: May 22, 2025</p>

            <p>
              CartoonifAI Inc. ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you use our CartoonifAI mobile
              application (the "Service").
            </p>

            <p>
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
              please do not access the Service.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">1. Information We Collect</h2>

            <h3 className="text-lg font-semibold mt-6 mb-2">1.1 Personal Data</h3>
            <p>We may collect personally identifiable information, such as:</p>
            <ul className="list-disc pl-6 my-4">
              <li>Email address (if you create an account)</li>
              <li>First name and last name (if provided)</li>
              <li>Photos you upload for transformation</li>
              <li>Usage data and app analytics</li>
              <li>Device information</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-2">1.2 Photos and Image Data</h3>
            <p>
              Our Service requires access to your photos to provide the cartoon transformation functionality. When you
              upload a photo:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>The photo is temporarily stored on our servers for processing</li>
              <li>Our AI analyzes the photo to create the cartoon transformation</li>
              <li>The original photo is deleted from our servers after processing (typically within 24 hours)</li>
              <li>The transformed cartoon images may be stored in your account if you choose to save them</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-2">1.3 Usage Data</h3>
            <p>
              We may also collect information that your device sends whenever you use our Service ("Usage Data"). This
              Usage Data may include:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>Your device's Internet Protocol address (IP address)</li>
              <li>Device type and mobile device unique identifier</li>
              <li>Operating system</li>
              <li>The pages of our Service that you visit</li>
              <li>The time and date of your visit</li>
              <li>The time spent on those pages</li>
              <li>Unique device identifiers</li>
              <li>Other diagnostic data</li>
            </ul>

            <h2 className="text-xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>

            <p>We use the collected data for various purposes:</p>
            <ul className="list-disc pl-6 my-4">
              <li>To provide and maintain our Service</li>
              <li>To process your photos and create cartoon transformations</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To serve advertisements within the app</li>
            </ul>

            <h2 className="text-xl font-bold mt-8 mb-4">3. Advertising</h2>

            <p>
              We use third-party advertising companies to serve ads when you use our Service. These companies may use
              information about your visits to this and other apps and websites to provide advertisements about goods
              and services of interest to you.
            </p>

            <p>We work with the following advertising partners:</p>
            <ul className="list-disc pl-6 my-4">
              <li>Google AdMob</li>
              <li>Facebook Audience Network</li>
              <li>Unity Ads</li>
              <li>AppLovin</li>
            </ul>

            <p>
              These advertising partners may use cookies, web beacons, and similar technologies to collect information
              about your use of the Service and other websites and applications. This information may be used to display
              advertisements on our Service and elsewhere on the Internet based on your interests.
            </p>

            <p>
              You can opt out of personalized advertising by adjusting your device settings or visiting the privacy
              settings of our advertising partners.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">4. Data Retention</h2>

            <p>
              We will retain your Personal Data only for as long as is necessary for the purposes set out in this
              Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal
              obligations, resolve disputes, and enforce our legal agreements and policies.
            </p>

            <p>
              We will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a
              shorter period of time, except when this data is used to strengthen the security or to improve the
              functionality of our Service, or we are legally obligated to retain this data for longer time periods.
            </p>

            <p>
              Your uploaded photos are temporarily stored on our servers for processing and are deleted within 24 hours
              after processing is complete. The cartoon transformations are stored in your account if you choose to save
              them and can be deleted at any time.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">5. Transfer of Data</h2>

            <p>
              Your information, including Personal Data, may be transferred to — and maintained on — computers located
              outside of your state, province, country or other governmental jurisdiction where the data protection laws
              may differ from those of your jurisdiction.
            </p>

            <p>
              If you are located outside the United States and choose to provide information to us, please note that we
              transfer the data, including Personal Data, to the United States and process it there.
            </p>

            <p>
              Your consent to this Privacy Policy followed by your submission of such information represents your
              agreement to that transfer.
            </p>

            <p>
              CartoonifAI Inc. will take all steps reasonably necessary to ensure that your data is treated securely and
              in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an
              organization or a country unless there are adequate controls in place including the security of your data
              and other personal information.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">6. Disclosure of Data</h2>

            <h3 className="text-lg font-semibold mt-6 mb-2">6.1 Legal Requirements</h3>
            <p>
              CartoonifAI Inc. may disclose your Personal Data in the good faith belief that such action is necessary
              to:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>To comply with a legal obligation</li>
              <li>To protect and defend the rights or property of CartoonifAI Inc.</li>
              <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
              <li>To protect the personal safety of users of the Service or the public</li>
              <li>To protect against legal liability</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-2">6.2 Service Providers</h3>
            <p>
              We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), to
              provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how
              our Service is used.
            </p>

            <p>
              These third parties have access to your Personal Data only to perform these tasks on our behalf and are
              obligated not to disclose or use it for any other purpose.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">7. Security of Data</h2>

            <p>
              The security of your data is important to us, but remember that no method of transmission over the
              Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable
              means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">8. Your Data Protection Rights</h2>

            <p>Depending on your location, you may have certain rights regarding your personal information, such as:</p>
            <ul className="list-disc pl-6 my-4">
              <li>The right to access, update or delete the information we have on you</li>
              <li>
                The right of rectification - the right to have your information corrected if it is inaccurate or
                incomplete
              </li>
              <li>The right to object - the right to object to our processing of your Personal Data</li>
              <li>
                The right of restriction - the right to request that we restrict the processing of your personal
                information
              </li>
              <li>
                The right to data portability - the right to be provided with a copy of the information we have on you
                in a structured, machine-readable and commonly used format
              </li>
              <li>
                The right to withdraw consent - the right to withdraw your consent at any time where we relied on your
                consent to process your personal information
              </li>
            </ul>

            <p>
              If you wish to exercise any of these rights, please contact us using the information provided in the
              "Contact Us" section below.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">8.1 California Privacy Rights</h3>
            <p>
              If you are a California resident, you have the right to request information regarding the disclosure of
              your personal information to third parties for their direct marketing purposes. To make such a request,
              please contact us using the information provided in the "Contact Us" section below.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">8.2 GDPR Data Protection Rights</h3>
            <p>
              If you are a resident of the European Economic Area (EEA), you have certain data protection rights.
              CartoonifAI Inc. aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of
              your Personal Data.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">9. Children's Privacy</h2>

            <p>Our Service is not directed to anyone under the age of 13 ("Children").</p>

            <p>
              We do not knowingly collect personally identifiable information from anyone under the age of 13. If you
              are a parent or guardian and you are aware that your Child has provided us with Personal Data, please
              contact us. If we become aware that we have collected Personal Data from children without verification of
              parental consent, we take steps to remove that information from our servers.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">10. Changes to This Privacy Policy</h2>

            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
            </p>

            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy
              are effective when they are posted on this page.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">11. Contact Us</h2>

            <p>
              If you have any questions about this Privacy Policy, please{" "}
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
