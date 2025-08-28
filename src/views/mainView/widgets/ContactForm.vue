<template>
  <form @submit.prevent class="bg-surface-alt flex flex-col gap-15 rounded-lg px-13 py-15">
    <h4 class="d-headline-h3 text-dark uppercase">Zostaw nam wiadomość</h4>
    <div class="flex flex-col gap-10">
      <div class="flex flex-col gap-10 xl:flex-row">
        <BaseInput type="email" name="email" placeholder="Twój adres E-mail" label="Adres e-mail" />
        <BaseInput
          type="text"
          name="name"
          placeholder="Twoje imię i nazwisko"
          label="Imię i nazwisko"
        />
        <BaseInput
          type="text"
          name="topic"
          placeholder="O czym chcesz porozmawiać?"
          label="Temat rozmowy"
        />
      </div>
      <BaseInput
        name="message"
        placeholder="Napisz swoją wiadomość..."
        label="Wiadomość"
        :is-textarea="true"
      />
      <CheckboxInput
        name="checkbox"
        label="Wyrażam zgodę na przetwarzanie moich danych osobowych w postaci imienia, nazwiska, adresu e-mail i nr tel. (jeżeli został podany), podanych w powyższym formularzu, zgodnie z przepisami rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych), Dz. Urz. UE z 4.5.2016 r. L 119, str. 1), w celu udzielenia odpowiedzi na złożone zapytanie. Żądanie usunięcia danych proszę kierować na adres biuro@realestate.comInformujemy, że: 1. Administratorem Pani/Pana danych osobowych jest RealEstate sp. z o.o. z siedzibą w Poznaniu przy ul. Długiej 5 lok. 25, 01-200 Poznań (KRS nr 0001000000) (dalej „Administrator”) e-mail: biuro@realestate.com"
      >
        Wyrażam zgodę na przetwarzanie moich danych osobowych w postaci imienia, nazwiska, adresu
        e-mail i nr tel. (jeżeli został podany), podanych w powyższym formularzu, zgodnie z
        przepisami rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia
        2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w
        sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne
        rozporządzenie o ochronie danych), Dz. Urz. UE z 4.5.2016 r. L 119, str. 1), w celu
        udzielenia odpowiedzi na złożone zapytanie. Żądanie usunięcia danych proszę kierować na
        adres biuro@realestate.com <br />
        Informujemy, że: 1. Administratorem Pani/Pana danych osobowych jest RealEstate sp. z o.o. z
        siedzibą w Poznaniu przy ul. Długiej 5 lok. 25, 01-200 Poznań (KRS nr 0001000000) (dalej
        „Administrator”) e-mail: biuro@realestate.com
      </CheckboxInput>
    </div>
    <div>
      <BaseButton :is-blue="true" icon="arrow" @click="sendMessage">Wyślij wiadomość</BaseButton>
    </div>
  </form>
</template>
<script setup lang="ts">
import BaseButton from '@/components/buttons/BaseButton.vue';
import BaseInput from '@/components/inputs/BaseInput.vue';
import CheckboxInput from '@/components/inputs/CheckboxInput.vue';
import { toTypedSchema } from '@vee-validate/zod';
import z from 'zod';
import { useForm } from 'vee-validate';

const schema = toTypedSchema(
  z.object({
    name: z.string(),
    email: z.string().email(),
    topic: z.string(),
    message: z.string(),
    checkbox: z.boolean().refine((val) => val === true),
  }),
);

const { values, validate, meta } = useForm({ validationSchema: schema });

/**
 * Validate form and get inputs value
 */
const sendMessage = (): void => {
  validate();
  if (meta.value.valid) {
    console.log(values);
    // Send form
  }
};
</script>
