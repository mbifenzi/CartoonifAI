import type { Metadata } from "next"
import { H2, H3, LegalPage, List, P, TextLink } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Privacy Policy | CartoonifAI",
  description: "How the CartoonifAI app collects, uses, keeps and deletes your information.",
}

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="October 2, 2026">
      <P>
        This Privacy Policy explains how CartoonifAI Inc. (&quot;CartoonifAI&quot;, &quot;we&quot;, &quot;us&quot;)
        handles your information when you use the CartoonifAI mobile app (the &quot;App&quot;) and this website. If you
        have questions, email us at <TextLink href="mailto:support@cartoonifai.com">support@cartoonifai.com</TextLink>.
      </P>

      <H2>The short version</H2>
      <List>
        <li>You can use the App without an account. Signing in with Apple or Google is optional.</li>
        <li>Your photos are used only to create the transformations you ask for. We do not sell them, share them for
          advertising, or use them to train AI models.</li>
        <li>Photos you upload are deleted automatically within 1 day if you use the App as a guest, or within 30 days
          if you are signed in. Your finished creations stay in your gallery until you delete them.</li>
        <li>You can delete all of your data at any time in the App under Settings.</li>
      </List>

      <H2>Information we collect</H2>

      <H3>Information created when you install the App</H3>
      <P>
        When you first open the App, we create an anonymous installation ID and a secret token so the App can talk to
        our servers. We also store your device platform (for example, iOS), App version and language, and when the
        installation was created and last used.
      </P>

      <H3>Account information (optional)</H3>
      <P>
        If you choose to sign in with Apple or Google, we receive and store your email address, a unique identifier for
        your Apple or Google account and, if you share it, your name. If you use Apple&apos;s &quot;Hide My Email&quot;,
        we receive a private relay address instead of your real email.
      </P>

      <H3>Photos and creations</H3>
      <P>
        When you transform a photo, the photo you select is uploaded to our servers. We store the finished image (your
        &quot;creation&quot;) so you can view, save and share it later. We also store which style you used and whether
        you marked a creation as a favorite.
      </P>

      <H3>Sparkles, rewards and purchases</H3>
      <P>
        We keep a history of your Sparkle balance: welcome bonuses, daily gifts, rewards for watching videos, Sparkles
        spent on transformations, refunds and purchases. If you buy a Sparkle pack or subscribe to CartoonifAI Plus, we
        receive confirmation of the purchase and your subscription status. We never receive your payment card details.
        Apple handles payment.
      </P>

      <H3>Feedback and reports</H3>
      <P>
        If you rate a creation or report one, we store your rating, the reason you chose and any text you add.
      </P>

      <H3>Notifications</H3>
      <P>
        If you allow notifications, we store a push notification token for your device and your notification settings,
        so we can tell you when a creation is ready. Daily gift reminders are scheduled on your device.
      </P>

      <H3>Technical and diagnostic information</H3>
      <P>
        Our servers record technical information needed to run and secure the service, such as IP addresses, request
        times and errors. When something goes wrong, error details may be sent to our error monitoring provider. We
        configure it so that photos, image links and credentials are not included.
      </P>

      <H2>Face data</H2>
      <P>
        Because the App transforms portraits, the photos you upload usually show your face. We use the photo only to
        create the image you requested. We do not create facial recognition templates or other biometric identifiers,
        we do not use your face to identify you, and we do not use your photos to train AI models. Photos are shared
        only with the service providers listed below that store and process them on our behalf, and they are deleted on
        the schedule described in &quot;How long we keep your information&quot;.
      </P>

      <H2>How we use your information</H2>
      <List>
        <li>To create, store and show your transformations.</li>
        <li>To keep your Sparkle balance, rewards, purchases and Plus benefits accurate, and to restore them when you
          sign in on another device.</li>
        <li>To send the notifications you have turned on.</li>
        <li>To review reports, respond to support requests and improve the quality of results.</li>
        <li>To keep the service secure, prevent fraud and abuse (for example, claiming the same reward twice), and fix
          errors.</li>
        <li>To comply with legal obligations.</li>
      </List>
      <P>
        If you are in the European Economic Area or the United Kingdom, we rely on these legal bases: performing our
        contract with you (providing the App and the purchases you make), our legitimate interests (security, fraud
        prevention and improving the App), your consent (notifications, which you can turn off at any time) and legal
        obligations.
      </P>

      <H2>Advertising</H2>
      <P>
        The App offers optional rewarded videos from Google AdMob: you can choose to watch a short video to earn
        Sparkles. Ads are only shown when you ask for one. The App does not ask for permission to track you across other
        companies&apos; apps and websites, so it does not give Google your device&apos;s advertising identifier.
        Google may still collect information such as your IP address, device type and how you interact with the ad to
        show it, measure it and prevent fraud. When you finish a video, Google tells our servers so we can add your
        reward. This confirmation includes your installation ID. See{" "}
        <TextLink href="https://policies.google.com/technologies/partner-sites">how Google uses information from apps that use its services</TextLink>.
      </P>

      <H2>Service providers we share information with</H2>
      <P>We share information only with providers that help us run the App, and only for that purpose:</P>
      <List>
        <li><strong>Cloudinary</strong> stores uploaded photos and finished creations.</li>
        <li><strong>Replicate</strong> runs the AI models that create transformations. It receives your photo and
          returns the result, and keeps them only briefly under its own data retention policy.</li>
        <li><strong>Apple</strong> processes payments and subscriptions, provides Sign in with Apple and delivers push
          notifications.</li>
        <li><strong>Google</strong> provides Sign in with Google and the optional rewarded videos (AdMob).</li>
        <li><strong>RevenueCat</strong> manages purchases and subscription status. It receives your purchase
          information and an anonymous user ID.</li>
        <li><strong>Expo</strong> relays push notifications to Apple&apos;s notification service.</li>
        <li><strong>Sentry</strong> receives error reports from our servers.</li>
        <li>Our hosting and infrastructure providers, which run our servers and databases.</li>
      </List>
      <P>
        We may also disclose information if required by law, to protect the rights and safety of our users or others,
        or as part of a merger or sale of our business, in which case we will tell you before your information becomes
        subject to a different privacy policy. We do not sell your personal information or share it for cross-context
        behavioral advertising.
      </P>

      <H2>How long we keep your information</H2>
      <List>
        <li><strong>Uploaded photos:</strong> deleted automatically 1 day after you upload a photo or last use it for a
          transformation if you use the App as a guest, or after 30 days if you are signed in.</li>
        <li><strong>Creations:</strong> kept until you delete them, or until you delete your data.</li>
        <li><strong>Sparkle history, purchases, favorites, feedback and reports:</strong> kept while you use the App,
          until you delete your data.</li>
        <li><strong>Server logs and error reports:</strong> kept for a limited period for security and debugging, then
          deleted.</li>
      </List>

      <H2 id="delete">Deleting your data</H2>
      <P>
        You can delete your data at any time in the App: open <strong>Profile → Settings → Delete my account</strong>{" "}
        (or <strong>Delete my data</strong> if you are not signed in). This permanently deletes, on every device linked
        to your account, your uploaded photos, creations, Sparkle history, favorites, feedback, reports, notification
        settings and push tokens, and then your sign-in account. If you also use another app from us with the same
        sign-in, we keep only the basic account information that app needs.
      </P>
      <P>
        You can also delete a single creation at any time from your gallery. If you cannot use the App, email{" "}
        <TextLink href="mailto:support@cartoonifai.com">support@cartoonifai.com</TextLink> and we will delete your
        data for you.
      </P>
      <P>
        Deleting your data does not cancel a CartoonifAI Plus subscription. Cancel it in your App Store settings. Apple
        and RevenueCat keep records of past purchases under their own policies.
      </P>

      <H2>Your rights</H2>
      <P>
        Depending on where you live, you may have the right to access, correct, delete or receive a copy of your
        personal information, to object to or restrict how we use it, and to withdraw consent. California residents
        have the right to know what we collect and to request deletion, and we will not discriminate against you for
        exercising these rights. To make a request, email{" "}
        <TextLink href="mailto:support@cartoonifai.com">support@cartoonifai.com</TextLink>. We may need to verify your
        request, and we respond within 30 days. You also have the right to complain to your local data protection
        authority.
      </P>

      <H2>International transfers</H2>
      <P>
        We and our service providers may process your information in countries other than your own, including the
        United States. Where the law requires it, we rely on appropriate safeguards such as the European
        Commission&apos;s Standard Contractual Clauses.
      </P>

      <H2>Security</H2>
      <P>
        We protect your information with measures such as encrypted connections, hashed installation tokens, signed
        uploads and access controls. No method of transmission or storage is completely secure, but we work to protect
        your information and to limit how long we keep it.
      </P>

      <H2>Children</H2>
      <P>
        The App is not directed to children under 13, and we do not knowingly collect personal information from them.
        If you believe a child under 13 has given us personal information, contact us and we will delete it.
      </P>

      <H2>Changes to this policy</H2>
      <P>
        We will update this page when our practices change and change the date at the top. If a change is significant,
        we will tell you in the App before it takes effect.
      </P>

      <H2>Contact us</H2>
      <P>
        CartoonifAI Inc. —{" "}
        <TextLink href="mailto:support@cartoonifai.com">support@cartoonifai.com</TextLink> ·{" "}
        <TextLink href="/contact">cartoonifai.com/contact</TextLink>
      </P>
    </LegalPage>
  )
}
