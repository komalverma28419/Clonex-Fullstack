import React from "react";
import termsConditionsData from "../../data/termsConditionsData";
import { Link } from "react-router-dom";

const TermsConditions = () => {
  return (
    <section className="py-6 md:py-10 xl:py-14 dark:bg-dark-alternate">
      <div className="max-w-7xl mx-auto px-7 lg:px-12 xl:px-14">
        <div>
          {termsConditionsData.map((section, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <h2 className="text-xl md:text-2xl font-semibold text-dark dark:text-dark-text mb-2">
                {section.title}
              </h2>
              {section.paragraphs?.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex} className="text-gray-600 dark:text-dark-muted mb-2">
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  {section.list.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              )}

              {/*--------------------------------------- Subsections --------------------------------*/}
              {section.subsections?.map((subsection, subIndex) => (
                <div key={subIndex} className="mt-6">
                  <h3 className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-100 mb-3">
                    {subsection.title}
                  </h3>
                  {/*------------------------------- Subsection Paragraphs--------------------- */}
                  {subsection.paragraphs?.map(
                    (paragraph, paragraphIndex) => (
                      <p key={paragraphIndex} className="text-gray-600 dark:text-gray-300 mb-2">
                        {paragraph}
                      </p>
                    )
                  )}
                  {/* -----------------------------------------Subsection List----------------------- */}
                  {subsection.list && (
                    <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                      {subsection.list.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

            </div>
          ))}
        </div>
        <Link to="/signup" className="inline-block my-6 text-primary hover:underline">
            ← Back to Sign Up
        </Link>
      </div>
    </section>
  )
}
export default TermsConditions;