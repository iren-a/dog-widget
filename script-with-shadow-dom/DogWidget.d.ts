declare const DogWidget: {
  init: ({
           container: HTMLElement,
         }) => DogWidgetInstance;
}

declare interface DogWidgetInstance {
  destroy(): void;
  updateDog(): void;
}
