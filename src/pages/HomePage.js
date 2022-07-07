import React from "react";

const HomePage = () => {
  return (
    <React.Fragment>
      <h1>My Experience as a Product Designer in a Development Team</h1>
      <p>
        Hello and welcome to my Full Stack developer blog. If you have worked as
        a digital product designer in technology companies, you have surely been
        part of a development team or interacted with one to bring a project to
        completion. I am almost certain that these conversations have ensued on
        more than one occasion on tense conversations in which everyone involved
        claimed to be right and no one could create an agreement. These types of
        situations arise when "design" and "development" are understood as two
        distinct processes in the creation of a digital product. Thinking of the
        design process (UX phase, UI phase) as something independent of the
        development process can only lead to mediocre results, whether you work
        on projects built from scratch or implemented at a later stage. Why?
        Well, it is very simple. If the team takes a project at an advanced
        stage, the developers will have to deal with legacy code,
        infrastructure, and/or time constraints that often hinder the correct
        implementation of design proposals. But even taking a project from
        scratch, the team might face changes in the client's business model that
        may involve turning the wheel very quickly in another direction and
        having to adjust many workflows, designs, and components that will
        successively impact the code built by the development team. To this, we
        must add that not all developers have knowledge of UI design, and what a
        product designer sees as a clear sign of substandard implementation, a
        developer might not see it. Of course, this is not the developer’s
        fault. Often, product designers send proposals halfway or do not take
        into account technological limitations, delivery times, or resources
        available on the equipment.
      </p>
      <h2>6 good practices between design and development</h2>
      <p>
        As product designers, we have in our hands the mission of ensuring the
        consistency of the product. We can see ourselves as a facilitator in
        times of tension between the client's wishes and the development
        process, always looking for the best solution for all the stakeholders
        in the product. Over the years, I have managed to identify these "good
        practices", which have helped me improve the relationship between design
        and development. Now, as a Product Designer at Fullstack Labs, I've
        employed them in practice and even taken them to another level. Here, at
        Fullstack Labs, we work on incredible projects that lead to very
        interesting technological and professional challenges. Here are six
        practices that have helped me maintain a positive connection with the
        development teams I've collaborated with.
      </p>
      <h2>1. EVERYTHING about the design should be explained</h2>
      <p>
        The person in charge of product development, like everyone else, must
        create a "mental map" of how everything is structured. For example, what
        happens when a user first opens the platform, what happens when a user
        clicks on a specific button, how to navigate to a specific page, how
        information is presented, and how to return to a previous step in a
        process.
      </p>
      <h3>What's the best way to approach it?</h3>
      <p>
        There are various elements to consider in order to solve this,
        including:
        <ul>
          <li>
            Create clear information architecture and incorporate feature maps,
            user flows, and other visual aids if possible.
          </li>
          <li>
            Make an interactive prototype that is as close as possible to the
            final platform or application.
          </li>
          <li>
            This will also help identify difficulties or gaps with the
            developers that can be addressed during the design phase, avoiding
            labor and patches later on.
          </li>
        </ul>
      </p>
    </React.Fragment>
  );
};

export default HomePage;
