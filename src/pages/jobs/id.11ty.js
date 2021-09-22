module.exports = function () {
    return /*html*/ `
        <section>
            <h1 class="text-3xl font-bold text-indigo-600">
                Job Title {{name}}
            </h1>
            <p class="prose prose-lg">
                Apply for the position, Production Inventory Control
                Specialist, with Sizewise today or contact Adrienne
                Gaschler for more information. Posted Sep 22, 2021.
            </p>
        </section>

        <div
            class="
        w-full
        h-px
        bg-gradient-to-r
        from-indigo-600
        rounded-full
        my-8
    "
        ></div>

        <section class="grid grid-cols-1 md:grid-cols-7 gap-8">
            <div class="col-span-5">
                <p
                    class="
                uppercase
                font-semibold
                text-sm
                tracking-wide
                flex flex-row
                items-center
                text-blueGray-700
                mb-4
            "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                    </svg>
                    Description
                </p>
                <article class="prose prose-indigo">
                    <p>
                        In this role you will: Work 6:00am-2:00pm in
                        our Hays, KS manufacturing site Prepare and
                        post internal transfers between locations
                        Assist in maintaining accurate inventory
                        levels Communicate with warehouse staff,
                        various internal departments, and outside
                        vendors Utilize computerized inventory systems
                        Ensure all items are appropriately
                    </p>
                    <p>
                        received and stored Maintain documentation;
                        prepare inventory reports Investigate and find
                        solutions for discrepancies Qualifications:
                        Database, spreadsheet, and word‐processing
                        software skills Manual dexterity required for
                        operating machinery and computers Basic
                        understanding of inventory control procedures
                        Organization skills; ability to work under
                        minimum supervision High
                        <a href="#">school</a>
                    </p>
                    <p>
                        diploma or equivalent Ability to lift/carry
                        and/or push/pull up to 40 pounds Sizewise
                        Manufacturing provides a full benefits package
                        which includes: Health, Vision & Dental
                        Insurance Affordable premiums with health
                        insurance deductibles of $750 individual/$1500
                        family Company paid life insurance of $50,000
                        Company paid short term disability 401k
                        company match with immediate vesting 6 paid
                        holidays Paid Time Off Paid bi-weekly
                        Additional information about our company can
                        be found at www.sizewise.com or
                        https://sizewisemfg.com/mfg/careers
                    </p>
                    <p class="h-[2000px]"></p>
                </article>
            </div>
            <aside class="col-span-2">
                <a
                    href="#"
                    class="
                bg-white
                rounded
                w-full
                py-4
                border border-gray-300
                hover:border-indigo-600
                transition-all
                text-center
                flex flex-row
                justify-center
                items-center
            "
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                        />
                        <path
                            d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                        />
                    </svg>
                    Apply Online</a
                >
            </aside>
        </section>
    `
}
