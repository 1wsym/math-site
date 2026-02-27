export function WaveVariant1() {
    return (
        <svg
            className="wave"
            aria-hidden="true"
            width="100%"
            height="8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <pattern id="wave-pattern" width="91" height="8" patternUnits="userSpaceOnUse">

                    <path
                        d="M114 4c-5.067 4.667-10.133 4.667-15.2 0S88.667-.667 83.6 4 73.467 8.667 68.4 4 58.267-.667 53.2 4 43.067 8.667 38 4 27.867-.667 22.8 4 12.667 8.667 7.6 4-2.533-.667-7.6 4s-10.133 4.667-15.2 0S-32.933-.667-38 4s-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133-4.667-15.2 0-10.133-4.667-15.2 0-10.133-4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0"
                        stroke="var(--md-sys-color-primary)"
                        strokeLinecap="square"
                    />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave-pattern)" />
        </svg>
    );
}

export function WaveVariant2() {
    return (
        <svg
            className="wave"
            aria-hidden="true"
            width="100%"
            height="40"
            viewBox="0 0 1440 100"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                marginBottom: '-5px',
                marginLeft: '-50vw',
                marginRight: '-50vw',
                display: 'block',
                width: '100vw',
                position: 'relative',
                left: '50%',
                right: '50%',
            }}
        >
            <path
                d="M0,50 C320,100 420,0 720,50 C1020,100 1120,0 1440,50 V100 H0 V50 Z"
                stroke="var(--md-sys-color-primary)"
                strokeWidth="2"
            />
        </svg>
    );
}

export function WaveVariant3() {
    return (
        <svg
            className="wave"
            aria-hidden="true"
            width="100%"
            height="100%"
            viewBox="0 0 1440 1000"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100vw',
                height: '100%',
                zIndex: 0,
            }}
        >
            <path
                d="M0,40 C320,100 420,0 720,40 C1020,80 1120,0 1440,40 V1000 H0 Z"
                fill="var(--md-sys-color-surface-variant)"
                stroke="var(--md-sys-color-primary)"
                strokeWidth="2"
            />
        </svg>
    );
}