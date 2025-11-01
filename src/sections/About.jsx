function About() {
  return (
    <>
      {/* About SVCE */}
      <section id="venue" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">ABOUT SVCE</h2>
            <p className="text-gray-600 leading-relaxed">
              Sri Venkateswara College of Engineering (SVCE), a premier self-financing engineering
              college was started in the year 1985 and is managed by Sri Venkateswara Educational and
              Health Trust. The college conducts 13 B.E / B.Tech Degree Courses, 8 PG Courses in
              Engineering. 11 research centers approved by Anna University cater to MS (by Research) and
              PhD programmes. The courses are approved by AICTE and affiliated to Anna University,
              Chennai. The college received Autonomous status in 2016. The college is accredited by
              National Assessment and Accreditation Council (NAAC). The college is situated in serene
              environment about 37 km from Chennai and situated on the way of Chennai - Bangalore
              National Highway (NH4) at Pennalur, Sriperumbudur, in Kanchipuram district.
            </p>
          </div>
        </div>
      </section>

      {/* About Department */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                ABOUT THE DEPARTMENT
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The Department of EEE was started in the year 1994. The post graduate program (M.E) in Power Electronics and Drives was started in 2002. The department has secured permanent affiliation with Anna University and accredited by National Board of Accreditation for the third consecutive time for five years. The Department has well equipped state –of- the- art laboratories and recognized as a research centre by Anna University. The Department has well qualified and experienced faculty and staff members of proven ability and profound skills.
              </p>
            </div>

            <div className="flex justify-center">
              <img 
                src="/images/dept1.jpg" 
                alt="Department" 
                className="rounded-lg shadow-lg max-w-md"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;