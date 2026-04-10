import type { Metadata } from 'next';
import PageWrapper from '@/components/layout/PageWrapper';
import Divider from '@/components/ui/Divider';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Garron Park is a US History teacher at Southeast High School in Oklahoma City and the creator of Broadsheet Education.',
};

const values = [
  {
    accent: 'bg-accent',
    name: 'Students First',
    desc: 'Low pay and high mandates are real pressures in public education. But they fade in the classroom. The relationship between a teacher and a student is the most important variable in education, and I treat it that way.',
  },
  {
    accent: 'bg-ink-muted',
    name: 'Evidence-Based Practice',
    desc: 'Teachers are expected to justify their instructional decisions with data. I hold that standard for myself, and I hold district and administrative decisions to the same bar.',
  },
  {
    accent: 'bg-ink',
    name: 'Belonging Drives Learning',
    desc: 'My graduate research confirmed what good teachers already know: when students feel securely connected to the adults in their school, their motivation increases. Presence and accessibility are not soft skills. They are pedagogy.',
  },
  {
    accent: 'bg-accent',
    name: 'Teacher Voice Matters',
    desc: 'Educators should be genuine stakeholders in the decisions that shape their schools. I believe in advocating publicly and professionally for that seat at the table.',
  },
  {
    accent: 'bg-ink-muted',
    name: 'Dialogue Over Deposit',
    desc: 'Drawing on Paulo Freire, I reject the "banking model" of education where students are passive recipients of someone else\'s curriculum. Knowledge is co-constructed. Students are subjects of their own learning, not objects of instruction.',
  },
  {
    accent: 'bg-ink',
    name: 'Education as Liberation',
    desc: 'Rooted in the tradition of Gutierrez and Cone, I understand genuine education as an act of liberation, especially for communities that have been materially and spiritually marginalized. The classroom is a site of dignity before it is a site of content delivery.',
  },
];

const press = [
  {
    outlet: 'The Oklahoman',
    section: 'Education',
    byline: 'Ben Felder',
    headline: 'Incoming Oklahoma Teachers Hope for Better Days',
    year: 'November 27, 2016',
    desc: 'Profiled as a student teacher at Southeast during a difficult period for Oklahoma public education, Park spoke about passion carrying him past the pressures of low pay and high mandates. "All of that fades away when I get in the classroom," he said.',
  },
  {
    outlet: 'The Oklahoman',
    section: 'Education',
    byline: 'Guest Column',
    headline: 'Teacher Engagement Lacking in OKC School Calendar Change',
    year: 'September 2018',
    desc: 'Park argued publicly that the OKCPS board\'s move away from the continuous learning calendar lacked both empirical justification and genuine teacher input. "I am far more concerned that legitimate reasoning behind the change has not been distributed to district stakeholders."',
  },
];

export default function AboutPage() {
  return (
    <div className="py-10 md:py-14">
      <PageWrapper narrow>

        {/* Page header */}
        <div className="mb-10">
          <div className="mb-4 space-y-1">
            <div className="h-px bg-ink" />
            <div className="h-0.5 bg-ink" />
          </div>
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-ink-muted mb-3">
            About
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-black text-ink leading-tight mb-3">
            Garron Park
          </h1>
          <p className="font-sans text-base text-ink-light">
            US History · Southeast High School, Oklahoma City · M.Ed., University of Central Oklahoma
          </p>
          <div className="mt-4 space-y-1">
            <div className="h-0.5 bg-ink" />
            <div className="h-px bg-ink" />
          </div>
        </div>

        {/* Intro */}
        <div className="mb-10">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-ink-muted mb-2">
            Background
          </p>
          <h2 className="font-serif text-xl font-bold text-ink mb-4">
            Committed to Southeast. Committed to Students.
          </h2>
          <div className="font-sans text-base text-ink-light leading-relaxed space-y-4">
            <p>
              I teach US History at Southeast High School in Oklahoma City, where I have also taught
              Government, World History, AP World History, AP US History, Civics, Personal Finance,
              and Street Law. I came to Southeast as a student teacher through the Urban Teacher
              Preparation Academy, a partnership between Oklahoma City Public Schools, the University
              of Oklahoma, and the University of Central Oklahoma.
            </p>
            <p>
              I hold a degree from Southern Nazarene University and an M.Ed. from UCO, where my
              graduate research focused on how student-teacher relationships shape motivation in high
              school. That research informs how I teach, and it is the foundation behind
              Broadsheet Education.
            </p>
            <p className="font-serif italic text-ink text-lg leading-relaxed border-l-2 border-paper-rule pl-4">
              "I don&apos;t see myself leaving. Just the work that needs to be done in Oklahoma education."
              <span className="block mt-2 font-sans not-italic text-xs text-ink-muted uppercase tracking-widest">
                The Oklahoman, 2019
              </span>
            </p>
          </div>
        </div>

        <Divider className="my-10" />

        {/* Teaching values */}
        <div className="mb-10">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-ink-muted mb-2">
            In the Classroom
          </p>
          <h2 className="font-serif text-xl font-bold text-ink mb-2">
            What I Believe About Teaching
          </h2>
          <p className="font-sans text-sm text-ink-muted mb-6">
            A few principles that shape how I approach history and civics every day.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.name} className="bg-white border border-paper-rule p-5">
                <div className={`w-8 h-0.5 mb-4 ${v.accent}`} />
                <p className="font-serif text-base font-bold text-ink mb-2">{v.name}</p>
                <p className="font-sans text-sm text-ink-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <Divider className="my-10" />

        {/* Graduate research */}
        <div className="mb-10">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-ink-muted mb-2">
            Graduate Research
          </p>
          <h2 className="font-serif text-xl font-bold text-ink mb-1">
            M.Ed. Thesis
          </h2>
          <p className="font-sans text-sm text-ink-muted mb-6">
            University of Central Oklahoma · Department of Educational Sciences, Foundations, and Research · 2018
          </p>
          <div className="border border-paper-rule bg-white">
            <div className="bg-ink p-5">
              <p className="font-serif text-base font-bold text-paper leading-snug mb-1">
                Attachment in Secondary Education: Effects of Student Attachment Bonds with Parents
                and Teachers on Student Motivation
              </p>
              <p className="font-sans text-xs text-paper/50 uppercase tracking-widest">
                Garron K. Park · UCO · ProQuest No. 10929745 · 2018
              </p>
            </div>
            <div className="p-5">
              <p className="font-sans text-sm text-ink-light leading-relaxed italic border-l-2 border-accent pl-4 mb-5">
                The consistent amount of time a student spends with educators throughout their
                childhood requires that researchers take steps to understand the extent of the impact
                these relationships might have. This research utilizes attachment theory as a
                framework through which student-teacher relationships impact student motivation
                beyond that of parent-child relationships. Findings indicate that while
                teacher-student and parent-child attachments are correlated, student motivation is
                predicted more strongly by attachment to a parent than to a secondary educator.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'attachment theory',
                  'student-teacher relationships',
                  'motivation',
                  'regulatory mode theory',
                  'secondary education',
                ].map((kw) => (
                  <span
                    key={kw}
                    className="font-mono text-xs text-accent bg-accent-light border border-paper-rule px-3 py-1"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Divider className="my-10" />

        {/* Why Broadsheet Education */}
        <div className="mb-10">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-ink-muted mb-2">
            Why Broadsheet Education
          </p>
          <h2 className="font-serif text-xl font-bold text-ink mb-4">
            Tools Built from the Classroom Out
          </h2>
          <div className="font-sans text-base text-ink-light leading-relaxed space-y-4">
            <p>
              Broadsheet Education grew out of a simple frustration: the tools available to students
              and teachers rarely reflect how learning actually works in a public school classroom.
              Most are built for a different audience, priced for a different budget, or designed
              with assumptions that do not hold at a school like Southeast.
            </p>
            <p>
              The tools here are built by a teacher, for K-12 classrooms. The Overton Window Search
              started as a way to help US History students encounter a genuine range of perspectives
              on the issues they were studying, not just what a search engine or AI produces. The AI and Plagiarism
              Checker came from a need to give teachers and students a shared, honest starting point
              for conversations about writing integrity in an era of generative AI.
            </p>
            <p>
              Both tools reflect the same conviction: students learn better when they have access to
              honest, well-designed resources, and when the adults around them treat that access as a
              priority.
            </p>
          </div>
        </div>

        <Divider className="my-10" />

        {/* Press */}
        <div className="mb-10">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-ink-muted mb-2">
            In the News
          </p>
          <h2 className="font-serif text-xl font-bold text-ink mb-2">
            Featured in The Oklahoman
          </h2>
          <p className="font-sans text-sm text-ink-muted mb-6">
            Coverage on teaching, public advocacy, and Oklahoma City Public Schools.
          </p>
          <div className="flex flex-col gap-4">
            {press.map((item) => (
              <div key={item.headline} className="border border-paper-rule bg-white">
                <div className="p-4 border-b border-paper-rule">
                  <p className="font-sans text-xs uppercase tracking-widest text-accent mb-1">
                    {item.outlet} · {item.section} · {item.byline}
                  </p>
                  <p className="font-serif text-base font-bold text-ink leading-snug">
                    {item.headline}
                  </p>
                </div>
                <div className="p-4">
                  <p className="font-mono text-xs text-ink-muted mb-2">{item.year}</p>
                  <p className="font-sans text-sm text-ink-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Divider className="my-10" />

        {/* Freire quote */}
        <div className="bg-ink p-8 mb-10">
          <p className="font-serif text-xl italic text-paper leading-relaxed mb-4">
            "Education makes sense because women and men learn that through learning they can{' '}
            <span className="not-italic font-bold">make and remake themselves.</span>"
          </p>
          <p className="font-sans text-xs uppercase tracking-widest text-paper/40">Paulo Freire</p>
        </div>

        {/* Contact */}
        <div>
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-ink-muted mb-2">
            Get in Touch
          </p>
          <h2 className="font-serif text-xl font-bold text-ink mb-2">Contact</h2>
          <p className="font-sans text-sm text-ink-muted mb-5">
            Reach out through the Southeast faculty directory or the OKCPS staff directory.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              {
                label: 'Faculty Directory',
                href: 'https://sehs.okcps.org/our-school/faculty-directory/social-studies-department',
              },
              { label: 'Southeast High School', href: 'https://sehs.okcps.org' },
              { label: 'OKCPS District', href: 'https://www.okcps.org' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm border border-paper-rule bg-white px-4 py-2.5 text-ink-light hover:border-accent hover:text-accent transition-colors"
              >
                {link.label} →
              </a>
            ))}
          </div>
        </div>

      </PageWrapper>
    </div>
  );
}
