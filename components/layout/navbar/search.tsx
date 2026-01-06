'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { Button } from 'components/atoms/button';
import Form from 'next/form';
import { useSearchParams } from 'next/navigation';

type SearchProps = {
  onSubmit?: (formData: FormData) => void;
};

export function Search({ onSubmit }: SearchProps) {
  const searchParams = useSearchParams();

  return (
    <div
      className="h-full relative w-full flex gap-2.5 justify-end"
    >
      <Form
        action="/search"
        onSubmit={(e) => {
          if (!onSubmit) return;
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          onSubmit(formData);
        }}
        className="h-full relative w-full flex gap-2.5 justify-end"
      >
        <input
          key={searchParams?.get('q')}
          type="text"
          name="q"
          placeholder="Hvad leder du efter...?"
          autoComplete="off"
          defaultValue={searchParams?.get('q') || ''}
          className="text-md w-full max-w-3xl h-full rounded-lg border bg-beige px-4 py-2 text-black placeholder:text-neutral-500 md:text-sm"
        />
        <Button variant={'yellow'}>
          Søg
        </Button>
        <Button variant={'beige'} onClick={close} className='size-11 px-0 py-0'>
          <XMarkIcon className="size-5" />
        </Button>
      </Form>
    </div>
  );
}
