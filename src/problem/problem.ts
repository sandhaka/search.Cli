import { GraphNode } from '../graph/graph';

/**
 * Problem abstraction
 */
export abstract class Problem {

  protected goal: any;
  protected initial: any;

  protected constructor(initial: any, goal: any) {
    this.goal = goal;
    this.initial = initial;
  }

  public abstract actions(state: any): any[];

  public abstract result(state: any, action: any): any;

  public abstract goal_test(state: any): boolean;

  public abstract pathCost(c: number, state1: any, action: any, state2: any): number;

  public abstract get getInitialNode(): any;

  public abstract get getInitial(): any;

  // Used in optimization problems
  public value(state: any): any { }
}
