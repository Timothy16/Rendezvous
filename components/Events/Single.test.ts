import { describe, it, expect, beforeEach } from 'vitest';
import { shallowMount, VueWrapper } from '@vue/test-utils'; // Import VueWrapper
import Single from '@/components/Events/Single.vue';
import moment from 'moment';

// Mock event data
const mockEvent = {
  title: 'Sample Event',
  date: '2023-10-03',
  time: '18:00',
  imageUrl: '/images/sample-event.jpg',
  address: '123 Main Street, Lagos',
  organizer: {
    name: 'John Doe',
    email: 'johndoe@example.com',
    twitterUrl: 'https://twitter.com/johndoe',
    instagram: 'https://instagram.com/johndoe'
  },
  description: 'This is a sample event description.',
  category: 'music',
  price: 5000,
  lat: '6.5244',
  long: '3.3792'
};

describe('Single', () => {
  let wrapper: VueWrapper<any>; 

  beforeEach(() => {
    wrapper = shallowMount(Single, {
      props: {
        event: mockEvent
      },
      // global: {
      //   provide: {
      //     $moment: moment
      //   }
      // }
    });
  });

  it('renders event title correctly', () => {
    expect(wrapper.find('.event-header').text()).toBe(mockEvent.title);
  });

 
  it('formats and renders the date correctly', () => {
    const formattedDate = moment(mockEvent.date).format('dddd, MMMM Do, YYYY');
    const dateText = wrapper.find('.event-text').text();
    expect(dateText).toContain(formattedDate); 
  });

  it('formats and renders the time correctly', () => {
    const formattedTime = moment(mockEvent.time, 'HH:mm').format('hA');
    const timeText = wrapper.find('.l-f').text(); 
    expect(timeText).toContain(formattedTime); 
  });

  it('renders event description', () => {
    const description = wrapper.find('p').text(); 
    expect(description).toContain(mockEvent.description); 
  });

  it('renders event category', () => {
    const category = wrapper.find('.p-category').text(); 
    expect(category).toContain(mockEvent.category); 
  });

  

  it('formats and renders the price correctly', () => {
    const formattedPrice = 'NGN 5,000';
    expect(wrapper.find('.event-price').text()).toBe(formattedPrice);
  });

  it('renders organizer information correctly', () => {
    // expect(wrapper.find('organizer-name').text()).toContain(mockEvent.organizer.name);
    const organizerName = wrapper.find('.organizer-name').text(); 
    expect(organizerName).toContain(mockEvent.organizer.name); 
  });

  it('renders social media links if available', () => {
    const twitterLink = wrapper.find(`a[href="${mockEvent.organizer.twitterUrl}"]`);
    const instagramLink = wrapper.find(`a[href="${mockEvent.organizer.instagram}"]`);

    expect(twitterLink.exists()).toBe(true);
    expect(instagramLink.exists()).toBe(true);
  });

  it('renders the Google Maps iframe with the correct URL', () => {
    const iframe = wrapper.find('iframe');
    const generatedUrl = `https://maps.google.com/maps?width=100%&height=600&hl=en&q=${mockEvent.lat},${mockEvent.long}&z=14&output=embed`;

    expect(iframe.attributes('src')).toBe(generatedUrl);
  });

  it('displays "Free" when the event price is 0', async () => {
    await wrapper.setProps({
      event: { ...mockEvent, price: 0 }
    });

    expect(wrapper.find('.event-price').text()).toBe('Free');
  });
});
