import { expect, it, describe } from 'vitest';
import { type VueWrapper, type DOMWrapper, mount } from '@vue/test-utils';
import SliderCard from '@/views/mainView/components/SliderCard.vue';

describe('SliderCard.vue', (): void => {
  let component: VueWrapper;

  const createComponent = (config = {}): void => {
    component = mount(SliderCard, config);
  };

  const findImg = (): DOMWrapper<Element> => component.find('[data-test="SliderCardImg"]');
  const findLocation = (): DOMWrapper<Element> =>
    component.find('[data-test="SliderCardLocation"]');
  const findHeader = (): DOMWrapper<Element> => component.find('[data-test="SliderCardHeader"]');
  const findDescription = (): DOMWrapper<Element> =>
    component.find('[data-test="SliderCardDescription"]');
  const findNextBtn = (): DOMWrapper<Element> => component.find('[data-test="SliderCardNextBtn"]');
  const findPrevBtn = (): DOMWrapper<Element> => component.find('[data-test="SliderCardPrevBtn"]');

  describe('Props', (): void => {
    it('should set img src based on props.imgSrc', (): void => {
      // Given
      createComponent({
        props: {
          imgSrc: 'testSrc',
          header: 'testHeader',
          location: 'testLocation',
          description: 'testDescription',
        },
      });

      // When
      const imgElement = findImg();

      // Then
      expect(imgElement.attributes()['src']).toBe('testSrc');
    });

    it('should render header based on props.header', (): void => {
      // Given
      createComponent({
        props: {
          imgSrc: 'testSrc',
          header: 'testHeader',
          location: 'testLocation',
          description: 'testDescription',
        },
      });

      // When
      const headerElement = findHeader();

      // Then
      expect(headerElement.text()).toBe('testHeader');
    });

    it('should render location based on props.location', (): void => {
      // Given
      createComponent({
        props: {
          imgSrc: 'testSrc',
          header: 'testHeader',
          location: 'testLocation',
          description: 'testDescription',
        },
      });

      // When
      const locationElement = findLocation();

      // Then
      expect(locationElement.text()).toBe('testLocation');
    });

    it('should render description based on props.description', (): void => {
      // Given
      createComponent({
        props: {
          imgSrc: 'testSrc',
          header: 'testHeader',
          location: 'testLocation',
          description: 'testDescription',
        },
      });

      // When
      const descriptionElement = findDescription();

      // Then
      expect(descriptionElement.text()).toBe('testDescription');
    });

    it('should set classes based on props.isFirstSlide', (): void => {
      // Given
      createComponent({
        props: {
          imgSrc: 'testSrc',
          header: 'testHeader',
          location: 'testLocation',
          description: 'testDescription',
          isFirstSlide: true,
        },
      });

      // When
      const prevBtnElement = findPrevBtn();

      // Then
      expect(prevBtnElement.classes()).toContain('opacity-20');
    });

    it('should set classes based on props.isLastSlide', (): void => {
      // Given
      createComponent({
        props: {
          imgSrc: 'testSrc',
          header: 'testHeader',
          location: 'testLocation',
          description: 'testDescription',
          isLastSlide: true,
        },
      });

      // When
      const nextBtnElement = findNextBtn();

      // Then
      expect(nextBtnElement.classes()).toContain('opacity-20');
    });
  });

  describe('Emits', (): void => {
    it('should emit nextClick when nextBtn is clicked', async (): Promise<void> => {
      // Given
      createComponent({
        props: {
          imgSrc: 'testSrc',
          header: 'testHeader',
          location: 'testLocation',
          description: 'testDescription',
        },
      });

      // When
      const nextBtn = findNextBtn();
      await nextBtn.trigger('click');

      // Then
      expect(component.emitted()['nextClick']).toBeDefined();
    });

    it('should emit prevClick when prevBtn is clicked', async (): Promise<void> => {
      // Given
      createComponent({
        props: {
          imgSrc: 'testSrc',
          header: 'testHeader',
          location: 'testLocation',
          description: 'testDescription',
        },
      });

      // When
      const prevBtn = findPrevBtn();
      await prevBtn.trigger('click');

      // Then
      expect(component.emitted()['prevClick']).toBeDefined();
    });
  });
});
