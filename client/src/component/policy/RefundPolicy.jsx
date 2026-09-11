import React from "react";
import cancellationRefundData from "../../data/cancellationRefundData";

const RefundPolicy = () => {
  return (
    <section className="py-6 md:py-10 xl:py-14 dark:bg-dark-alternate">
      <div className="max-w-7xl mx-auto px-7 lg:px-12 xl:px-14">
        <div className="mb-4">
          <h1 className="text-3xl font-bold">Cancellation and Refund Policy</h1>

          <p className=" text-gray-600 dark:text-gray-400">
            Please review our cancellation, refund, and service renewal terms.
          </p>
        </div>

        <div className="space-y-8">
          {cancellationRefundData.map((section, index) => (
            <article key={section.title || index}>
              <h2 className="mb-2 text-xl font-semibold md:text-2xl">{section.title}</h2>
              {section.paragraphs?.length > 0 && (
                <div className="space-y-2">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex}
                      className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {section.list?.length > 0 && (
                <ul className="mt-5 list-disc space-y-2 pl-6 text-sm text-gray-600 dark:text-gray-400 md:text-base">
                  {section.list.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
export default RefundPolicy;