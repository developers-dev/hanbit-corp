"use client"

import { useState } from "react"

const countries = [
  { code: "KR", dial: "+82", name: "대한민국", pattern: /^0\d{1,2}-?\d{3,4}-?\d{4}$/, placeholder: "010-1234-5678" },
  { code: "US", dial: "+1", name: "United States", pattern: /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/, placeholder: "(555) 123-4567" },
  { code: "GB", dial: "+44", name: "United Kingdom", pattern: /^0\d{4}\s?\d{6}$/, placeholder: "07911 123456" },
  { code: "JP", dial: "+81", name: "日本", pattern: /^0\d{1,4}-?\d{1,4}-?\d{4}$/, placeholder: "090-1234-5678" },
  { code: "CN", dial: "+86", name: "中国", pattern: /^1\d{10}$/, placeholder: "13812345678" },
  { code: "DE", dial: "+49", name: "Deutschland", pattern: /^0\d{3,5}\s?\d{4,8}$/, placeholder: "0151 12345678" },
  { code: "FR", dial: "+33", name: "France", pattern: /^0[1-9]\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/, placeholder: "06 12 34 56 78" },
  { code: "AU", dial: "+61", name: "Australia", pattern: /^0[2-578]\d{8}$/, placeholder: "0412 345 678" },
  { code: "CA", dial: "+1", name: "Canada", pattern: /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/, placeholder: "(555) 123-4567" },
  { code: "IN", dial: "+91", name: "India", pattern: /^[6-9]\d{9}$/, placeholder: "9876543210" },
  { code: "BR", dial: "+55", name: "Brasil", pattern: /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, placeholder: "(11) 98765-4321" },
  { code: "MX", dial: "+52", name: "México", pattern: /^\d{10}$/, placeholder: "5512345678" },
  { code: "RU", dial: "+7", name: "Россия", pattern: /^9\d{9}$/, placeholder: "9123456789" },
  { code: "IT", dial: "+39", name: "Italia", pattern: /^3\d{8,9}$/, placeholder: "312 345 6789" },
  { code: "ES", dial: "+34", name: "España", pattern: /^[6-9]\d{8}$/, placeholder: "612 345 678" },
  { code: "NL", dial: "+31", name: "Nederland", pattern: /^0?6\d{8}$/, placeholder: "06 12345678" },
  { code: "SE", dial: "+46", name: "Sverige", pattern: /^07\d{7,8}$/, placeholder: "070 123 4567" },
  { code: "CH", dial: "+41", name: "Schweiz", pattern: /^0?7[5-9]\d{7}$/, placeholder: "076 123 4567" },
  { code: "SG", dial: "+65", name: "Singapore", pattern: /^[689]\d{7}$/, placeholder: "9123 4567" },
  { code: "HK", dial: "+852", name: "Hong Kong", pattern: /^[2-9]\d{7}$/, placeholder: "9123 4567" },
  { code: "TW", dial: "+886", name: "台灣", pattern: /^09\d{8}$/, placeholder: "0912345678" },
  { code: "TH", dial: "+66", name: "ไทย", pattern: /^0[689]\d{7,8}$/, placeholder: "081 234 5678" },
  { code: "VN", dial: "+84", name: "Việt Nam", pattern: /^0\d{9}$/, placeholder: "0912345678" },
  { code: "PH", dial: "+63", name: "Philippines", pattern: /^09\d{9}$/, placeholder: "09171234567" },
  { code: "MY", dial: "+60", name: "Malaysia", pattern: /^01\d{8,9}$/, placeholder: "0121234567" },
  { code: "ID", dial: "+62", name: "Indonesia", pattern: /^08\d{8,11}$/, placeholder: "081234567890" },
  { code: "AE", dial: "+971", name: "UAE", pattern: /^0?5\d{8}$/, placeholder: "050 123 4567" },
  { code: "SA", dial: "+966", name: "Saudi Arabia", pattern: /^0?5\d{8}$/, placeholder: "050 123 4567" },
  { code: "IL", dial: "+972", name: "Israel", pattern: /^0?5\d{8}$/, placeholder: "050-123-4567" },
  { code: "TR", dial: "+90", name: "Türkiye", pattern: /^05\d{9}$/, placeholder: "0532 123 4567" },
  { code: "PL", dial: "+48", name: "Polska", pattern: /^\d{9}$/, placeholder: "512 345 678" },
  { code: "ZA", dial: "+27", name: "South Africa", pattern: /^0[6-8]\d{8}$/, placeholder: "071 234 5678" },
  { code: "NG", dial: "+234", name: "Nigeria", pattern: /^0[789]\d{9}$/, placeholder: "0801 234 5678" },
  { code: "EG", dial: "+20", name: "Egypt", pattern: /^01[0-2]\d{8}$/, placeholder: "0101 234 5678" },
  { code: "KE", dial: "+254", name: "Kenya", pattern: /^07\d{8}$/, placeholder: "0712 345 678" },
  { code: "AR", dial: "+54", name: "Argentina", pattern: /^11\d{8}$/, placeholder: "11 1234-5678" },
  { code: "CL", dial: "+56", name: "Chile", pattern: /^9\d{8}$/, placeholder: "9 1234 5678" },
  { code: "CO", dial: "+57", name: "Colombia", pattern: /^3\d{9}$/, placeholder: "312 345 6789" },
  { code: "PE", dial: "+51", name: "Perú", pattern: /^9\d{8}$/, placeholder: "912 345 678" },
  { code: "NZ", dial: "+64", name: "New Zealand", pattern: /^02\d{7,9}$/, placeholder: "021 123 4567" },
  { code: "AT", dial: "+43", name: "Österreich", pattern: /^0\d{3,4}\s?\d{4,7}$/, placeholder: "0664 1234567" },
  { code: "BE", dial: "+32", name: "België", pattern: /^04\d{8}$/, placeholder: "0470 12 34 56" },
  { code: "DK", dial: "+45", name: "Danmark", pattern: /^\d{8}$/, placeholder: "20 12 34 56" },
  { code: "FI", dial: "+358", name: "Suomi", pattern: /^0[45]\d{7,8}$/, placeholder: "040 1234567" },
  { code: "NO", dial: "+47", name: "Norge", pattern: /^[49]\d{7}$/, placeholder: "412 34 567" },
  { code: "PT", dial: "+351", name: "Portugal", pattern: /^9\d{8}$/, placeholder: "912 345 678" },
  { code: "IE", dial: "+353", name: "Ireland", pattern: /^08\d{8}$/, placeholder: "085 123 4567" },
  { code: "CZ", dial: "+420", name: "Česko", pattern: /^\d{9}$/, placeholder: "601 123 456" },
  { code: "RO", dial: "+40", name: "România", pattern: /^07\d{8}$/, placeholder: "0712 345 678" },
  { code: "UA", dial: "+380", name: "Україна", pattern: /^0\d{9}$/, placeholder: "067 123 4567" },
]

export default function PhoneInput({ name = "phone", required = false, defaultCountry = "KR" }: { name?: string; required?: boolean; defaultCountry?: string }) {
  const [country, setCountry] = useState(defaultCountry)
  const [phone, setPhone] = useState("")
  const [error, setError] = useState("")

  const selected = countries.find((c) => c.code === country)!

  const validate = (value: string) => {
    if (!value) {
      setError("")
      return
    }
    if (!selected.pattern.test(value)) {
      setError(`Invalid format for ${selected.name} (e.g. ${selected.placeholder})`)
    } else {
      setError("")
    }
  }

  const fullValue = phone ? `${selected.dial} ${phone}` : ""

  return (
    <div>
      <div className="flex gap-2">
        <select
          value={country}
          onChange={(e) => {
            setCountry(e.target.value)
            setPhone("")
            setError("")
          }}
          className="w-[140px] shrink-0 px-3 py-3 rounded-lg text-[14px] outline-none transition-colors bg-warm-100 border-[1.5px] border-warm-300 text-warm-800 focus:border-navy"
        >
          {countries.map((c) => (
            <option key={c.code} value={c.code}>
              {c.dial} {c.name}
            </option>
          ))}
        </select>
        <input
          type="tel"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value)
            validate(e.target.value)
          }}
          onBlur={() => validate(phone)}
          placeholder={selected.placeholder}
          className={`flex-1 px-4 py-3 rounded-lg text-[15px] outline-none transition-colors bg-warm-50 border-[1.5px] text-warm-800 focus:border-navy ${
            error ? "border-red-400" : "border-warm-300"
          }`}
        />
        {/* hidden input for form submission */}
        <input type="hidden" name={name} value={fullValue} required={required} />
      </div>
      {error && <p className="text-xs text-red-500 mt-1.5">{error}</p>}
    </div>
  )
}
