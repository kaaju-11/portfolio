import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Testimonial {
  id: string;
  username: string;
  message: string;
}

interface TestimonialState {
  testimonials: Testimonial[];
}

const initialState: TestimonialState = {
  testimonials: [],
};

const testimonialSlice = createSlice({
  name: 'testimonial',
  initialState,
  reducers: {
    addTestimonial: (state, action: PayloadAction<Testimonial>) => {
      state.testimonials.push(action.payload);
    },
    setTestimonials: (state, action: PayloadAction<Testimonial[]>) => {
      state.testimonials = action.payload;
    },
  },
});

export const { addTestimonial, setTestimonials } = testimonialSlice.actions;

export default testimonialSlice.reducer;
