import React from "react";
import { Link } from "react-router-dom";
import privacyPolicyData from "../../data/PrivacyPolicy";

const PrivacyPolicy = () => {
  return (
    <section className="py-6 md:py-10 xl:py-14 dark:bg-dark-alternate">
      <div className="max-w-7xl mx-auto px-7 lg:px-12 xl:px-14">
        <div className="mb-4">
          <h1 className="text-3xl font-bold"> Privacy Policy</h1>

          <p className="text-gray-600 dark:text-gray-400">Learn how Clonex collects, uses, protects, and manages your
            information when you use our services.
          </p>
        </div>

        {/* -------------------------------------Privacy Policy Content ---------------------------*/}
        <div className="space-y-8">
          {privacyPolicyData.map((section, index) => (
            <article key={section.title || index}>
              <h2 className="mb-2 text-xl font-semibold md:text-2xl"> {section.title}</h2>
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

              {/* Main List */}
              {section.list?.length > 0 && (
                <ul className="mt-5 list-disc space-y-2 pl-6 text-sm text-gray-600 dark:text-gray-400 md:text-base">
                  {section.list.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              )}

              {/* Subsections */}
              {section.subsections?.length > 0 && (
                <div className="mt-6 space-y-6">
                  {section.subsections.map((subsection, subsectionIndex) => (
                    <div key={subsection.title || subsectionIndex}>
                      <h3 className="mb-3 text-lg font-medium md:text-xl">{subsection.title}</h3>
                      {subsection.list?.length > 0 && (
                        <ul className="list-disc space-y-2 pl-6 text-sm leading-7 text-gray-600 dark:text-gray-400 md:text-base">
                          {subsection.list.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
        <Link to="/signup" className="inline-block my-6 text-primary hover:underline">
            ← Back to Sign Up
        </Link>
      </div>
    </section>
  )
}
export default PrivacyPolicy;

