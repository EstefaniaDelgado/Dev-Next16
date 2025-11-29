import EventCard from '@/components/EventCard';
import ExploreBtn from '@/components/ExploreBtn';
import { events } from '@/lib/constants';



// const events =[
//   {image:'/images/event1.png', title: 'Event 1', slug:'slug-1', location: 'location-1', date:'date-1', time:'time-1'},
//   {image:'/images/event2.png', title: 'Event 2', slug:'slug-2', location: 'location-2', date:'date-2', time:'time-2'},
 
// ]


const Page = () => {
  return (
    <section className="text-center mt-14">
      <h1>
        The Hub for Every Dev <br /> You can&apos;t miss
      </h1>
      <p className="mt-5">
        Hackathons, Meetups and Conferences. All in one place.
      </p>
      <ExploreBtn />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events.map((event) => (
            <li key={event.title}><EventCard {...event} /></li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Page;
