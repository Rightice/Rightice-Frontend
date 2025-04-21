import "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import FamilyLaw from "../image/Family-Law.jpg"

const FamilyLawArticle = () => {
  return (
    <section>
      <Navbar />
      <article className="lg:px-48 px-4 mx-auto text-[#242E4D] pt-20 pb-20">
        <FadeInWhenVisible>
          <h1 className="lg:text-[4rem] text-3xl md:text-4xl font-bold mb-6">
            Understanding Family and Domestic Law in Nigeria.
          </h1>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <p className="mb-8 mt-20">
            Family and domestic law plays a vital role in shaping the personal
            lives of individuals, particularly when it comes to relationships,
            marriage, children, and property. These laws define the rights and
            responsibilities of people within a family and offer legal remedies
            when conflicts arise. In Nigeria, family law is influenced by
            customary law, Islamic law, and statutory law, depending on the
            individuals involved and their cultural or religious backgrounds.
          </p>
          <p className="mb-4">
            This article explores the key areas of family and domestic law in
            Nigeria, including marriage, divorce, child custody, maintenance,
            inheritance, and protection from domestic abuse.
          </p>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <img
            src={FamilyLaw}
            alt="property rights image"
            className="rounded w-full"
          />
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <h2 className="text-2xl font-semibold mb-4 mt-20">
            1. Types of Marriage Recognized in Nigeria
          </h2>
          <p className="mb-4">
            Nigeria recognizes three main types of marriage, each with different
            legal implications:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Statutory Marriage</strong> – Governed by the Marriage
              Act. Conducted in a marriage registry or licensed church.
              Monogamous (one man, one woman). Offers strong legal protection in
              matters like property, divorce, and inheritance.
            </li>
            <li>
              <strong>Customary Marriage</strong> – Based on the traditions and
              customs of a particular ethnic group. Can be polygamous.
              Recognized under Nigerian law if conducted according to customary
              rites. Offers limited formal legal protection unless registered.
            </li>
            <li>
              <strong>Islamic (Sharia) Marriage</strong> – Conducted under
              Islamic law, mainly in northern Nigeria. Polygamous (up to four
              wives). Recognized by Nigerian courts, especially in Sharia or
              customary courts.
            </li>
          </ul>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <h2 className="text-2xl font-semibold mb-4">
            2. Divorce and Legal Separation
          </h2>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Statutory Divorce</strong> – Governed by the Matrimonial
              Causes Act. Must be filed at a High Court. Grounds for divorce
              include adultery, cruelty, desertion, and irreconcilable
              differences. The court can also decide on custody, maintenance,
              and property settlement.
            </li>
            <li>
              <strong>Customary Divorce</strong> – Carried out under customary
              procedures, often involving family elders. Grounds for divorce and
              processes vary by ethnic group. May require repayment of the bride
              price.
            </li>
            <li>
              <strong>Islamic Divorce</strong> – Conducted in accordance with
              Islamic principles (e.g., Talaq or Khul&apos;). Usually involves a
              Sharia Court.
            </li>
          </ul>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <h2 className="text-2xl font-semibold mb-4">
            3. Child Custody and Guardianship
          </h2>
          <p className="mb-4">
            When a marriage ends or in the case of separation, child custody
            becomes a key issue. Nigerian courts prioritize the best interests
            of the child over tradition or gender.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Custody May Be:</strong> Physical (where the child lives)
              or Legal (who makes decisions on education, health, etc.).
            </li>
            <li>
              <strong>Factors the court considers:</strong> Age and welfare of
              the child, emotional attachment to the parent, financial and
              emotional capacity of the parents.
            </li>
          </ul>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <h2 className="text-2xl font-semibold mb-4">
            4. Child Support and Maintenance
          </h2>
          <p className="mb-4">
            Both parents are legally responsible for the financial support of
            their children, whether married or not. A court can order:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Payment for school fees, food, clothing, healthcare, and housing.
            </li>
            <li>
              Regular maintenance payments, especially after separation or
              divorce.
            </li>
          </ul>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <h2 className="text-2xl font-semibold mb-4">
            5. Spousal Support (Alimony)
          </h2>
          <p className="mb-4">
            In statutory marriages, a court may order one spouse to pay
            maintenance to the other during or after divorce proceedings. This
            usually applies when:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>One spouse is economically disadvantaged.</li>
            <li>The marriage was long and involved mutual contributions.</li>
          </ul>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <h2 className="text-2xl font-semibold mb-4">
            6. Domestic Violence and Legal Protection
          </h2>
          <p className="mb-4">
            Domestic violence—whether physical, emotional, psychological, or
            sexual—is a serious issue affecting many families in Nigeria.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Legal Protections Include:</strong> The Violence Against
              Persons Prohibition (VAPP) Act, which criminalizes physical abuse,
              rape, psychological abuse, economic abuse, harmful widowhood
              practices, and female genital mutilation.
            </li>
            <li>
              Victims can seek protective orders, police intervention, or
              support from domestic violence shelters.
            </li>
            <li>
              The VAPP Act is federal and applies only in the FCT, but some
              states have adopted it or enacted similar laws.
            </li>
          </ul>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <h2 className="text-2xl font-semibold mb-4">
            7. Inheritance and Succession
          </h2>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Statutory Law</strong> – The Administration of Estates Law
              applies in many southern states. Property is distributed to the
              surviving spouse, children, and parents.
            </li>
            <li>
              <strong>Customary Law</strong> – Often favors male relatives (in
              some ethnic groups). Can exclude wives or daughters from
              inheriting land. Varies widely across tribes.
            </li>
            <li>
              <strong>Islamic Law</strong> – Governed by Sharia inheritance
              rules, which are very detailed. Spouses, children, and extended
              relatives are allocated fixed shares.
            </li>
          </ul>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <h2 className="text-2xl font-semibold mb-4">8. Adoption</h2>
          <p className="mb-4">
            Adoption is governed by state laws and must be formalized in court.
            Requirements usually include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Being over 25 years old.</li>
            <li>Being at least 21 years older than the adoptee.</li>
            <li>Showing financial and emotional stability.</li>
            <li>
              Adoption gives the child the same rights as a biological child.
            </li>
          </ul>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          {" "}
          <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
          <p className="mb-4">
            Family and domestic law governs the most intimate and personal areas
            of life—marriage, parenting, inheritance, and protection from harm.
            Whether under statutory, customary, or Islamic law, every Nigerian
            has legal rights and responsibilities within their family structure.
          </p>
          <p className="mb-4">
            If youre going through a family-related legal issue, its important
            to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Know which legal system applies to your case.</li>
            <li>Seek legal advice from a qualified family lawyer.</li>
            <li>Understand your rights and take steps to protect them.</li>
          </ul>
          <p className="mb-4">
            Healthy families make a healthy nation—and the law is there to
            ensure justice, fairness, and safety for all members.
          </p>
        </FadeInWhenVisible>
      </article>

      <Footer />
    </section>
  );
};

export default FamilyLawArticle;
