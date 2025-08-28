import { expect, it, describe } from 'vitest';
import { type VueWrapper, type DOMWrapper, mount } from '@vue/test-utils';
import TutorialCard from '@/views/mainView/components/TutorialCard.vue';

describe('TutorialCard.vue', (): void => {
  let component: VueWrapper;

  const createComponent = (config = {}): void => {
    component = mount(TutorialCard, config);
  };

  const findIcon = (): DOMWrapper<Element> => component.find('[data-test="TutorialCardImg"]');
  const findText = (): DOMWrapper<Element> => component.find('[data-test="TutorialCardText"]');

  describe('Props', (): void => {
    it('should set img src based on props.imgSrc', (): void => {
      // Given
      createComponent({ props: { imgSrc: 'testSrc', text: 'testText' } });

      // When
      const iconElement = findIcon();

      // Then
      expect(iconElement.attributes()['src']).toBe('testSrc');
    });

    it('should render text based on props.text', (): void => {
      // Given
      createComponent({ props: { imgSrc: 'testSrc', text: 'testText' } });

      // When
      const textElement = findText();

      // Then
      expect(textElement.text()).toBe('testText');
    });
  });
});
