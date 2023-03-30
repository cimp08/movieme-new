import { RadioGroup } from '@headlessui/react';



const Radios = ({ plans, selected, setSelected }) => {

  return (
    <div className='flex justify-center'>
      <div>
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className='sr-only'>Media Type</RadioGroup.Label>
          <div className='flex flex-wrap justify-center gap-2'>
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ checked }) =>
                  `
                  ${
                    checked
                      ? 'bg-purple-500 bg-opacity-75 text-white'
                      : 'bg-slate-100'
                  }
                    relative flex cursor-pointer rounded-lg px-5 focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className='flex w-[90px] h-[40px] items-center justify-between'>
                      <div className='flex items-center'>
                        <div className='text-sm'>
                          <RadioGroup.Label
                            as='p'
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                        </div>
                      </div>
                      {checked && (
                        <div className='shrink-0 text-white'>
                          <CheckIcon className='h-6 w-6' />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

function CheckIcon(props) {
  return (
    <svg viewBox='0 0 24 24' fill='none' {...props}>
      <circle cx={12} cy={12} r={12} fill='#fff' opacity='0.2' />
      <path
        d='M7 13l3 3 7-7'
        stroke='#fff'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default Radios;
