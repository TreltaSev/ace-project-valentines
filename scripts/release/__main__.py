import click
from pyucc import console, colors, symbols
import sys

@click.group()
@click.pass_context
def cli(ctx):
    print("...")

if __name__ == "__main__":
    cli()