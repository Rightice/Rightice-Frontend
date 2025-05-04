import "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import EmployeeImage from "../image/employee.webp"

const EmployeeRights = () => {
  return (
    <div>
      <Navbar />

      <article className="lg:px-48 px-4 mx-auto text-[#242E4D] pt-20 pb-20">
        <FadeInWhenVisible>
          <h1 className="lg:text-[4rem] text-3xl md:text-4xl font-bold mb-6">
            Your Rights as an Employee: A Legal Overview.
          </h1>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section className="mb-8">
            <p>
              Understanding your rights as an employee is essential not only for
              protecting yourself at the workplace but also for fostering a
              productive and fair working environment. In Nigeria, these rights
              are protected by various laws, including the Labour Act, the
              Constitution, and other industrial regulations. This article
              breaks down your core rights as an employee in Nigeria—what you’re
              entitled to, what your employer is obligated to provide, and how
              you can seek redress when those rights are violated.
            </p>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <img
            src={EmployeeImage}
            alt="property rights image"
            className="rounded w-full"
          />
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section className="mb-8 mt-20">
            <h2 className="text-xl font-semibold mb-2">
              1. Right to Fair Wages and Timely Payment
            </h2>
            <p>
              One of the most fundamental rights of any worker is the right to
              be paid for their labor. Nigerian law requires employers to pay
              agreed-upon wages in full and on time.
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                Salaries must be paid as agreed in the employment contract.
              </li>
              <li>
                Deductions from wages must be lawful and consented to (e.g.,
                taxes, pension).
              </li>
              <li>
                You are entitled to a payslip showing how your wages are
                calculated and what deductions are made.
              </li>
            </ul>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              2. Right to a Written Employment Contract
            </h2>
            <p>
              Under the Labour Act, every employee is entitled to a written
              contract of employment within three months of starting work. This
              document outlines your job title, salary, working hours, leave
              entitlements, and other terms.
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Provides legal proof of your employment terms.</li>
              <li>Helps resolve disputes around wages, duties, or benefits.</li>
              <li>
                Gives you a clear understanding of your rights and
                responsibilities.
              </li>
            </ul>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              3. Right to Safe and Healthy Working Conditions
            </h2>
            <p>
              Every employee has the right to work in an environment that is
              safe and free from health hazards.
            </p>
            <h3 className="font-semibold">Employer’s Duties:</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                Provide safety equipment (e.g., gloves, helmets, fire
                extinguishers).
              </li>
              <li>Ensure clean and well-ventilated workspaces.</li>
              <li>Train staff on safety procedures.</li>
              <li>
                Report and manage workplace injuries or illnesses appropriately.
              </li>
            </ul>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              4. Right to Leave (Annual, Sick, and Maternity)
            </h2>
            <h3 className="font-semibold">a. Annual Leave</h3>
            <p>
              Employees are entitled to at least six working days of paid annual
              leave after 12 months of continuous work.
            </p>

            <h3 className="font-semibold">b. Sick Leave</h3>
            <p>
              You are entitled to up to 12 days of paid sick leave per year,
              provided you show a medical certificate.
            </p>

            <h3 className="font-semibold">c. Maternity Leave</h3>
            <p>
              Female employees are entitled to 12 weeks of maternity leave (6
              weeks before and 6 weeks after birth). They must receive at least
              50% of their wages during this period if they have worked for the
              employer for a minimum of six months.
            </p>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              5. Right to Equal Treatment and Non-Discrimination
            </h2>
            <p>
              The Nigerian Constitution guarantees freedom from discrimination.
              This means that employees should not be treated unfairly due to
              gender, religion, ethnicity, disability, or background.
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Unequal pay for equal work.</li>
              <li>Denial of promotion due to personal beliefs.</li>
              <li>Harassment or victimization at the workplace.</li>
            </ul>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              6. Right to Freedom of Association
            </h2>
            <p>Employees have the right to:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Join trade unions or professional associations.</li>
              <li>
                Collectively bargain for better wages or working conditions.
              </li>
              <li>Go on strike (as long as it follows due legal process).</li>
            </ul>
            <p>
              Employers cannot legally penalize workers for union involvement or
              collective action.
            </p>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              7. Right to Resign or Terminate Employment Lawfully
            </h2>
            <p>
              You have the right to resign from your job by giving the required
              notice stated in your employment contract. Likewise, an employer
              must follow due process before terminating an employee.
            </p>
            <h3 className="font-semibold">Unlawful Termination May Include:</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>No notice or inadequate notice.</li>
              <li>Dismissal without valid reason or hearing.</li>
              <li>Termination based on discrimination.</li>
            </ul>
            <p>
              In such cases, you may be entitled to compensation or
              reinstatement through legal redress.
            </p>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              8. Right to Redress and Protection from Retaliation
            </h2>
            <p>If your rights are violated, you can seek redress through:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Internal grievance procedures.</li>
              <li>Trade unions or workers’ associations.</li>
              <li>The National Industrial Court of Nigeria.</li>
              <li>The Ministry of Labour and Employment.</li>
            </ul>
            <p>
              You are also protected from retaliation for speaking up about your
              rights or reporting workplace abuses.
            </p>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              9. Right to Social Security Contributions
            </h2>
            <p>Employers are legally required to contribute to your:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Pension fund under the Pension Reform Act.</li>
              <li>National Housing Fund (NHF).</li>
              <li>
                Employee Compensation Scheme (for workplace injury or
                disability).
              </li>
            </ul>
            <p>
              These contributions protect you in case of retirement, disability,
              or health issues.
            </p>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section>
            <h2 className="text-xl font-semibold mb-2">Conclusion</h2>
            <p>
              As an employee in Nigeria, your rights are protected under the
              law—whether youre working in the private or public sector,
              full-time or part-time. Knowing your rights empowers you to stand
              up against injustice, demand fair treatment, and pursue justice
              when necessary.
            </p>
            <br />
            <p>
              Workplace fairness is a shared responsibility. Employers must
              create safe, respectful, and fair environments, while employees
              must understand their rights and fulfill their obligations. If
              you’re ever unsure, seek legal advice or consult your HR
              department or union representatives.
            </p>
          </section>
        </FadeInWhenVisible>
      </article>

      <Footer />
    </div>
  );
};

export default EmployeeRights;
