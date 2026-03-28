"use server"

import { sendEmail } from "@/lib/email"

export async function submitConsultation(formData: FormData) {
  const company = formData.get("company") as string
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const services = formData.getAll("services") as string[]
  const budget = formData.get("budget") as string
  const description = formData.get("description") as string
  const startDate = formData.get("startDate") as string

  if (!name || !email || !phone || !description) {
    return {
      success: false,
      message: "필수 항목을 모두 입력해주세요.",
    }
  }

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1e40af; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
        새로운 프로젝트 상담 문의가 도착했습니다
      </h2>
      
      <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #374151; margin-top: 0;">고객 정보</h3>
        <table style="width: 100%; border-collapse: collapse;">
          ${
            company
              ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #6b7280; width: 120px;">회사명:</td>
            <td style="padding: 8px 0; color: #374151;">${company}</td>
          </tr>
          `
              : ""
          }
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #6b7280; width: 120px;">담당자명:</td>
            <td style="padding: 8px 0; color: #374151;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">이메일:</td>
            <td style="padding: 8px 0; color: #374151;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">연락처:</td>
            <td style="padding: 8px 0; color: #374151;">${phone}</td>
          </tr>
          ${
            budget
              ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">예산 범위:</td>
            <td style="padding: 8px 0; color: #374151;">${budget}</td>
          </tr>
          `
              : ""
          }
          ${
            startDate
              ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">희망 시작일:</td>
            <td style="padding: 8px 0; color: #374151;">${startDate}</td>
          </tr>
          `
              : ""
          }
        </table>
      </div>
      
      ${
        services.length > 0
          ? `
      <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #374151; margin-top: 0;">관심 서비스</h3>
        <ul style="color: #374151; margin: 0; padding-left: 20px;">
          ${services.map((service) => `<li style="margin: 5px 0;">${service}</li>`).join("")}
        </ul>
      </div>
      `
          : ""
      }
      
      <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #374151; margin-top: 0;">프로젝트 설명</h3>
        <p style="color: #374151; line-height: 1.6; white-space: pre-wrap;">${description}</p>
      </div>
      
      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
        <p style="color: #6b7280; font-size: 14px;">
          이 메일은 HANBIT 상담 시스템에서 자동으로 발송되었습니다.
        </p>
      </div>
    </div>
  `

  try {
    const result = await sendEmail({
      to: process.env.SMTP_TO || process.env.SMTP_USER || "",
      subject: `[HANBIT 상담] ${company ? `${company} - ` : ""}${name} 님의 프로젝트 상담 문의`,
      html: emailHtml,
    })

    if (result.success) {
      return {
        success: true,
        message: "상담 신청이 성공적으로 제출되었습니다. 24시간 내에 연락드리겠습니다.",
      }
    } else {
      return {
        success: false,
        message: "상담 신청 중 오류가 발생했습니다. 다시 시도해주세요.",
      }
    }
  } catch (error) {
    console.error("Consultation submission error:", error)
    return {
      success: false,
      message: "상담 신청 중 오류가 발생했습니다. 다시 시도해주세요.",
    }
  }
}
