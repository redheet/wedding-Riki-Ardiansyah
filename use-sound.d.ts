declare module "use-sound" {
  type SpriteMap = {
    [key: string]: [number, number];
  };

  type UseSoundOptions = {
    id?: string;
    volume?: number;
    playbackRate?: number;
    interrupt?: boolean;
    soundEnabled?: boolean;
    sprite?: SpriteMap;
    onload?: () => void;
  };

  type PlayOptions = {
    id?: string;
    forceSoundEnabled?: boolean;
    playbackRate?: number;
  };

  type ExposedData = {
    stop: (id?: string) => void;
    pause: (id?: string) => void;
    duration: number | null;
    sound: unknown | null;
  };

  type PlayFunction = (options?: PlayOptions) => void;
  type ReturnedValue = [PlayFunction, ExposedData];

  function useSound<T = Record<string, never>>(
    src: string | string[],
    options?: UseSoundOptions & T,
  ): ReturnedValue;

  export default useSound;
  export { useSound };
}
