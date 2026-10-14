"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

export default function CopyCode({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Older browsers: the code stays selectable on the page.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white hover:bg-white/30"
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      {copied ? "Copied" : "Copy code"}
    </button>
  )
}
