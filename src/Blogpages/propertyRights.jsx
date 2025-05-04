import "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import PropertyImage from "../image/property.webp";

const PropertyRights = () => {
  return (
    <div>
      <Navbar />

      <article className="lg:px-48 px-4 mx-auto text-[#242E4D] pt-20 pb-20">
        <FadeInWhenVisible>
          <h1 className="lg:text-[4rem] text-3xl md:text-4xl font-bold mb-6">
            Understanding Land and Property Rights in Nigeria.
          </h1>

          <section className="mb-8">
            <p>
              Land and property rights are central to economic development,
              personal wealth, and community identity in Nigeria. However, these
              rights are governed by complex legal, cultural, and historical
              frameworks. This article aims to provide a clear and comprehensive
              understanding of land and property rights in Nigeria—how they are
              acquired, transferred, and protected.
            </p>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <img src={PropertyImage} alt="property rights image" className="rounded w-full" />
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section className="mb-8 mt-20">
            <h2 className="text-xl font-semibold mb-2">
              1. Historical Context of Land Ownership in Nigeria
            </h2>
            <p>
              Before colonial rule, land in Nigeria was predominantly owned and
              managed by communities through customary systems. These systems
              were based on traditional practices, lineage, and communal
              consensus. Land was rarely sold but was allocated for use, usually
              for farming or residence. The arrival of the British colonial
              government introduced Western legal systems, altering traditional
              landholding structures. In 1978, the military government
              introduced a transformative law that still governs land
              administration today—the Land Use Act.
            </p>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              2. The Land Use Act of 1978
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>All land is held in trust by the state governor.</li>
              <li>All land transactions require the governor’s consent.</li>
              <li>
                Rights of Occupancy:
                <ul className="list-disc list-inside ml-4">
                  <li>Statutory: Granted by the governor for urban land.</li>
                  <li>
                    Customary: Granted by local governments for rural land.
                  </li>
                </ul>
              </li>
              <li>
                Certificate of Occupancy (C of O): Legal proof of a right of
                occupancy.
              </li>
            </ul>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              3. Types of Land Ownership
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Customary Ownership:</strong> Based on indigenous
                traditions, common in rural areas.
              </li>
              <li>
                <strong>Statutory Ownership:</strong> Based on
                government-granted rights like C of O.
              </li>
              <li>
                <strong>Leasehold:</strong> Temporary tenure (often 99 years)
                from government or private owners.
              </li>
            </ul>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              4. Acquiring Land in Nigeria
            </h2>
            <h3 className="font-semibold">For Statutory Land:</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Conduct a land registry search.</li>
              <li>Hire a licensed surveyor.</li>
              <li>Obtain Governor’s Consent.</li>
              <li>Apply for a Certificate of Occupancy.</li>
            </ul>
            <h3 className="font-semibold mt-4">For Customary Land:</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Negotiate with community leaders.</li>
              <li>Perform customary rites and get receipts.</li>
              <li>Apply for Customary Right of Occupancy if needed.</li>
            </ul>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              5. Documentation of Land and Property Rights
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Certificate of Occupancy (C of O)</li>
              <li>Deed of Assignment</li>
              <li>Governor’s Consent</li>
              <li>Deed of Lease</li>
              <li>Survey Plan</li>
              <li>Land Purchase Receipt</li>
            </ul>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              6. Institutions Involved in Land Administration
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Ministry of Lands and Housing (State Level): Handles land
                allocation and processing.
              </li>
              <li>Land Registry: Maintains official land records.</li>
              <li>Surveyor-General’s Office: Approves survey plans.</li>
              <li>
                Local Government Authorities: Manage rural land and customary
                rights.
              </li>
            </ul>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              7. Challenges in Land and Property Rights
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Multiple Claims:</strong> Overlapping ownership under
                customary and statutory laws.
              </li>
              <li>
                <strong>Fraud and Forgery:</strong> Fake titles and illegal land
                sales.
              </li>
              <li>
                <strong>Bureaucracy:</strong> Long delays in obtaining C of O or
                governor’s consent.
              </li>
              <li>
                <strong>Lack of Awareness:</strong> Buyers often skip due
                diligence.
              </li>
            </ul>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              8. Recent Developments and Reforms
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Digitization of land registries in some states (e.g. Lagos).
              </li>
              <li>Proposed reforms to amend the Land Use Act.</li>
              <li>Title insurance to protect buyers from legal defects.</li>
            </ul>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              9. Tips for Prospective Land Buyers
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Always conduct a title search.</li>
              <li>Use licensed lawyers and surveyors.</li>
              <li>Insist on proper documentation.</li>
              <li>Avoid unreceipted cash transactions.</li>
              <li>Register your title after purchase.</li>
            </ul>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section>
            <h2 className="text-xl font-semibold mb-2">Conclusion</h2>
            <p>
              Understanding land and property rights in Nigeria is critical for
              investors, developers, and individuals. Although challenges exist,
              recent reforms are creating more transparency and legal assurance.
              Due diligence, proper documentation, and legal support are key to
              securing your property rights.
            </p>
          </section>
        </FadeInWhenVisible>
      </article>

      <Footer />
    </div>
  );
};

export default PropertyRights;
