import type { Metadata } from "next"
import { H2, H3, LegalPage, List, P, TextLink } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Terms of Use | CartoonifAI",
  description: "The terms that apply when you use the CartoonifAI app, Sparkles and CartoonifAI Plus.",
}

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="October 2, 2026">
      <P>
        These Terms of Use (the &quot;Terms&quot;) are an agreement between you and CartoonifAI Inc.
        (&quot;CartoonifAI&quot;, &quot;we&quot;, &quot;us&quot;) and govern your use of the CartoonifAI mobile app
        (the &quot;App&quot;). By using the App you agree to these Terms and to our{" "}
        <TextLink href="/privacy">Privacy Policy</TextLink>. If you do not agree, do not use the App.
      </P>

      <H2>1. Who can use the App</H2>
      <P>
        You must be at least 13 years old to use the App. If you are under the age of majority where you live, you may
        use the App only with the permission of a parent or guardian who agrees to these Terms for you.
      </P>

      <H2>2. Your account</H2>
      <P>
        You can use the App as a guest. A guest&apos;s creations and Sparkles are tied to the device, so they can be lost
        if you delete the App or change devices. You can optionally sign in with Apple or Google to keep them attached to
        your account across devices. You are responsible for activity on your account and for keeping access to your
        Apple or Google account secure.
      </P>

      <H2>3. Your photos and creations</H2>
      <H3>3.1 What you may upload</H3>
      <P>Only upload photos that you have the right to use. In particular, you agree that:</P>
      <List>
        <li>you took the photo or have permission to use it, and</li>
        <li>everyone recognizable in the photo has agreed to it being transformed, and a parent or guardian has agreed
          for anyone under 18.</li>
      </List>

      <H3>3.2 What you may not do</H3>
      <P>You agree not to use the App to:</P>
      <List>
        <li>create sexual, violent, hateful, harassing or otherwise unlawful content, or any sexualized content involving
          minors;</li>
        <li>impersonate someone, or present a creation as a real photo in order to deceive, defame or harm anyone;</li>
        <li>infringe anyone&apos;s copyright, trademark, privacy or publicity rights;</li>
        <li>interfere with the App, get around its limits or security, or abuse rewards (for example, by automating
          rewarded videos or creating installations to collect bonuses); or</li>
        <li>copy, resell or reverse engineer the App, except where the law allows it.</li>
      </List>
      <P>
        You can report a creation from within the App. We may remove content and suspend or end access for anyone who
        breaks these Terms.
      </P>

      <H3>3.3 Ownership and permission to operate the service</H3>
      <P>
        You keep the rights you have in the photos you upload. As between you and us, you may use your creations for
        personal, non-commercial purposes, including sharing them on social media. You give us a limited, worldwide,
        royalty-free permission to store, process and display your photos and creations only as needed to provide the
        App to you, for as long as they are stored under our{" "}
        <TextLink href="/privacy">Privacy Policy</TextLink>. We do not use your photos for advertising or to train AI
        models.
      </P>

      <H3>3.4 AI-generated results</H3>
      <P>
        Creations are generated automatically by AI models. Results can be inaccurate, unexpected or imperfect, may not
        look like you, and may resemble other images. We do not guarantee any particular result. Free shares of
        creations from the App may include a small CartoonifAI watermark.
      </P>

      <H2>4. Sparkles</H2>
      <P>
        Sparkles are a virtual item used to create transformations. You can receive Sparkles as a welcome bonus, as a
        daily gift, by choosing to watch rewarded videos, through CartoonifAI Plus, or by buying Sparkle packs.
      </P>
      <List>
        <li>Sparkles have no cash value, cannot be exchanged for money and cannot be transferred or sold.</li>
        <li>Sparkles you buy or earn do not expire. Plus Sparkles refresh every 30 days and unused Plus Sparkles do not
          carry over to the next cycle. Plus Sparkles are used before your other Sparkles.</li>
        <li>If a transformation fails, the Sparkles spent on it are returned automatically.</li>
        <li>Sparkles are lost if you delete your data, and a guest&apos;s Sparkles are lost if the App is removed from
          the device before signing in.</li>
        <li>We may change how many Sparkles a style costs or how many you receive from rewards. A change never removes
          Sparkles already in your balance.</li>
      </List>

      <H2>5. CartoonifAI Plus subscriptions</H2>
      <P>
        CartoonifAI Plus is an optional auto-renewing subscription, offered monthly or yearly. It includes a Sparkle
        allowance every 30 days, members-only styles, bonus Sparkles on packs, and sharing without the watermark. The
        current price and benefits are shown in the App before you subscribe.
      </P>
      <List>
        <li>Payment is charged to your Apple ID when you confirm the purchase.</li>
        <li>Your subscription renews automatically at the end of each period at the then-current price unless you
          cancel at least 24 hours before the period ends. Your account is charged for renewal within 24 hours before
          the end of the current period.</li>
        <li>If an offer includes a free trial, the subscription starts automatically when the trial ends unless you
          cancel at least 24 hours before it ends.</li>
        <li>You can manage or cancel your subscription at any time in your App Store account settings. Cancelling stops
          future renewals. You keep Plus until the end of the period you have paid for.</li>
        <li>Deleting the App or your CartoonifAI data does not cancel your subscription.</li>
      </List>

      <H2>6. Purchases and refunds</H2>
      <P>
        Purchases are processed by Apple and are subject to Apple&apos;s terms. Refund requests are handled by Apple
        at <TextLink href="https://reportaproblem.apple.com">reportaproblem.apple.com</TextLink>. If Apple refunds a
        Sparkle pack, the Sparkles from it are removed from your balance. Except where required by law, purchases are
        final. Use <strong>Restore Purchases</strong> in the App to restore your subscription on a new device.
      </P>

      <H2>7. Rewarded videos</H2>
      <P>
        The App offers optional rewarded videos provided by Google AdMob. Watching one is always your choice. A reward
        is added once the ad network confirms the video was completed, and rewards may be limited per day.
      </P>

      <H2>8. Our rights</H2>
      <P>
        The App, its styles, design and software are owned by CartoonifAI and its licensors and are protected by law.
        Subject to these Terms, we give you a personal, non-exclusive, non-transferable, revocable license to use the
        App on Apple devices that you own or control, as permitted by the Usage Rules in Apple&apos;s Media Services
        Terms and Conditions.
      </P>

      <H2>9. Ending your use</H2>
      <P>
        You can stop using the App at any time, and you can delete your data in the App under Settings. We may suspend or
        end your access if you break these Terms or if we stop offering the App. If we stop offering the App, we will
        give reasonable notice where we can.
      </P>

      <H2>10. Disclaimers</H2>
      <P>
        The App is provided &quot;as is&quot; and &quot;as available&quot;. To the fullest extent permitted by law, we
        disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose and
        non-infringement. We do not promise that the App will be uninterrupted or error-free. Some jurisdictions do not
        allow these exclusions, so they may not apply to you.
      </P>

      <H2>11. Limitation of liability</H2>
      <P>
        To the fullest extent permitted by law, CartoonifAI will not be liable for any indirect, incidental, special,
        consequential or punitive damages, or for loss of data, profits or goodwill, arising from your use of the App.
        Our total liability for any claim relating to the App is limited to the greater of the amount you paid us in the
        12 months before the claim or US$50. Nothing in these Terms limits liability that cannot be limited by law.
      </P>

      <H2>12. Apple-specific terms</H2>
      <P>If you downloaded the App from Apple&apos;s App Store, you also agree that:</P>
      <List>
        <li>These Terms are between you and CartoonifAI only, not Apple. CartoonifAI, not Apple, is solely responsible
          for the App and its content.</li>
        <li>Apple has no obligation to provide any maintenance or support services for the App.</li>
        <li>If the App fails to conform to any applicable warranty, you may notify Apple, and Apple will refund the
          purchase price for the App (if any). To the maximum extent permitted by law, Apple has no other warranty
          obligation with respect to the App.</li>
        <li>CartoonifAI, not Apple, is responsible for addressing any claims relating to the App or your use of it,
          including product liability claims, claims that the App fails to meet legal or regulatory requirements, and
          consumer protection or privacy claims.</li>
        <li>CartoonifAI, not Apple, is responsible for investigating, defending, settling and discharging any
          third-party claim that the App infringes that third party&apos;s intellectual property rights.</li>
        <li>You represent that you are not located in a country subject to a U.S. Government embargo or designated as a
          &quot;terrorist supporting&quot; country, and that you are not on any U.S. Government list of prohibited or
          restricted parties.</li>
        <li>Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce them against
          you.</li>
      </List>

      <H2>13. Governing law</H2>
      <P>
        These Terms are governed by the laws of the United States, without regard to conflict of law rules. If you are a
        consumer, you keep any protections given to you by the mandatory laws of the country where you live. If any part
        of these Terms is found unenforceable, the rest stays in effect.
      </P>

      <H2>14. Changes to these Terms</H2>
      <P>
        We may update these Terms. We will change the date at the top and, for significant changes, tell you in the App
        before they take effect. If you keep using the App after a change takes effect, the updated Terms apply.
      </P>

      <H2>15. Contact us</H2>
      <P>
        CartoonifAI Inc. —{" "}
        <TextLink href="mailto:support@cartoonifai.com">support@cartoonifai.com</TextLink> ·{" "}
        <TextLink href="/contact">cartoonifai.com/contact</TextLink>
      </P>
    </LegalPage>
  )
}
