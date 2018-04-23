// @flow
import * as React from 'react';

type Subscription = {|
    values?: boolean,
    submitting?: boolean,
|};

type FormState = {|
    values?: Object,
    submitting?: boolean,
|};

const formState: FormState = {
    values: {
        email: 'hello@test.com',
    },
    submitting: true,
};

// eslint-disable-next-line no-unused-vars
const FormSpy = <T: Subscription>({
    subscription,
    render,
}: {
    subscription: T,
    render: (formState: T) => React.Node,
}) => {
    const state: T = {
        values: subscription.values === true ? formState.values : undefined,
        submitting:
            subscription.submitting === true ? formState.submitting : undefined,
    };

    return render(state);
};

FormSpy.defaultProps = {
    subscription: {
        values: undefined,
        submitting: undefined,
    },
};

// eslint-disable-next-line no-unused-vars
const Without = () => <FormSpy render={() => <div>Hi</div>} />;

// eslint-disable-next-line no-unused-vars
const MyThing = () => (
    <FormSpy
        subscription={{ values: true }}
        render={({ values }) => {
            const { hello } = values;

            return <div>{hello}</div>;
        }}
    />
);

