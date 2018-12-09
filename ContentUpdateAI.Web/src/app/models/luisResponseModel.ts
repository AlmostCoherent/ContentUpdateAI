module ContentUpdateAI.LuisService {
  export class LuisModel {
    public Query: string;
    public TopScoringIntent: TopScoringIntent;
    public Entities: Array<LuisEntity>;
    public CompositeEntities: Array<CompositeEntities>;
  }
  export class CompositeEntities {
    public ParentType: string;
    public Value: string;
    public Children: Array<CompositeChildren>;
  }
  export class CompositeChildren {
    public Type: string;
    public Value: string;
  }
  export class TopScoringIntent {
    public Intent: string;
    public Score: number;
  }
  export class LuisEntity {
    public Entity: string;
    public Type: string;
    public StartIndex: number;
    public EndIndex: number;
    public Score: number;
  }
}
