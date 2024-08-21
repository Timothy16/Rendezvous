import { describe, it, expect, beforeEach } from 'vitest';
import { shallowMount, VueWrapper } from '@vue/test-utils'; // Import VueWrapper
import All from '@/components/Events/All.vue';
import moment from 'moment';

// Mock event data
const mockEvent = {
    id : 1,
    imageUrl: 'https://example.com/image.jpg',
    title: 'Test Event',
    date: '2024-08-23',
    time: '12:00',
    description: 'This is a long event description that will be truncated.'
};

describe('Single', () => {
  let wrapper: VueWrapper<any>; 

  beforeEach(() => {
    wrapper = shallowMount(All, {
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

  it('renders event title', () => {
    expect(wrapper.find('.card-title').text()).toBe(mockEvent.title);
  });

//   it('renders event description', () => {
//     expect(wrapper.find('.card-description').text()).toBe(mockEvent.description);
//   });

    it('renders the event description and truncates if over 300 characters', async () => {
        const longDescription = 'A'.repeat(350);
        
        // Set the longer description
        await wrapper.setProps({
            event: { ...mockEvent, description: longDescription },
        });
    
        // Wait for the DOM to update
        await wrapper.vm.$nextTick();
    
        const truncatedDescription = wrapper.find('.card-description').text();
        expect(truncatedDescription).toBe(longDescription.substring(0, 300) + '...');
    });

  it('formats and renders the date correctly', () => {
    const formattedDate = moment(mockEvent.date).format('ddd, MMM Do');
    const dateText = wrapper.find('.test-date').text();
    expect(dateText).toContain(formattedDate); 
  });

  it('formats and renders the time correctly', () => {
    const formattedTime = moment(mockEvent.time, 'HH:mm').format('hA');
    const dateText = wrapper.find('.test-time').text();
    expect(dateText).toContain(formattedTime); 
  });

  it('renders the correct image URL', () => {
    const image = wrapper.find('.card-image');
    expect(image.attributes('src')).toBe(mockEvent.imageUrl);
  });

  it('renders the correct NuxtLink with event ID', () => {
    const link = wrapper.find('.card-link');
    expect(link.attributes('to')).toBe(`/events/${mockEvent.id}`);
  });


});
